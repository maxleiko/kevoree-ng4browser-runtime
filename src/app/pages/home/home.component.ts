import kevoree from 'kevoree-library';
import $ from 'jquery';
import { Component } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
import { InstallerService } from '../../services/installer.service';
import { KevoreeCoreService, State } from '../../services/core.service';
import { KevScriptService } from '../../services/kevscript.service';

const SUBMIT_SCRIPT = '// you can now submit script to make changes @runtime :)\n';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string;
  script: string;
  isCollapsed = true;
  tdefFile: string;
  isTdefLoaded = false;
  duFile: string;
  isDuLoaded = false;
  tdef: TypeDefinition;
  du: DeployUnit;
  tdefError = false;
  duError = false;

  constructor(public core: KevoreeCoreService, private logger: LoggerService,
    private kevs: KevScriptService, private installer: InstallerService) {
    if (this.core.isBootstrapped()) {
      this.name = this.core.getNodeName();
      this.script = SUBMIT_SCRIPT;
    } else {
      this.name = 'node' + (Math.floor(Math.random() * 1000) + 1);
      this.script = `add ${this.name}: JavascriptNode
add ${this.name}.ticker: Ticker
add ${this.name}.printer: ConsolePrinter
add chan: LocalChannel

bind ${this.name}.ticker.tick chan
bind ${this.name}.printer.input chan`;
    }
  }

  start() {
    if (this.core.state.getValue() === State.INIT || this.core.state.getValue() === State.STOPPED) {
      this.core.start(this.name)
        .then(() => this.kevs.interpret(this.script)
          .then(({ model, warnings }) => {
            warnings.forEach((warning) => this.logger.warn(warning));
            return model;
          }))
        .then((model) => this.core.deploy(model))
        .then(() => {
          this.script = SUBMIT_SCRIPT;
          this.logger.info('Platform bootstrapped successfully :)');
        })
        .catch((err) => {
          this.logger.error(err.message);
        });
    }
  }

  stop() {
    if (this.core.state.getValue() === State.STARTING || this.core.state.getValue() === State.STARTED) {
      this.core.stop();
    }
  }

  submitScript() {
    if (this.core.isBootstrapped()) {
      this.core.submitScript(this.script);
    }
  }

  loadTypeDefinition() {
    this.resetTdefField();
    $('input[name=load-tdef]').click();
  }

  loadTypeDefinitionFile(event) {
    const files: FileList = event.target.files;
    this.tdefFile = files[0].name;

    if (this.tdefFile) {
      const reader = new FileReader();
      reader.onload = (onLoadEvt) => {
        const data = (<any>onLoadEvt.target).result;
        new Promise<ContainerRoot>((resolve) => {
          const factory = new kevoree.factory.DefaultKevoreeFactory();
          const loader = factory.createJSONLoader();
          const model = loader.loadModelFromString(data).get(0);
          this.tdef = model.packages.array[0].typeDefinitions.array[0];
          this.du = this.tdef.deployUnits.array[0];
          resolve(model);
        })
          .then((model) => this.core.merge(model))
          .then(() => { this.isTdefLoaded = true; })
          .catch(() => {
            this.tdefError = true;
          });
      };

      try {
        reader.readAsText(files[0]);
      } catch (err) {
        this.logger.error('Unable to read TypeDefinition file content.\n' + err.message);
      }
    } else {
      this.logger.error('Unable to load TypeDefinition file. Did you select one?');
    }
  }

  loadDeployUnit() {
    this.resetDuField();
    $('input[name=load-du]').click();
  }

  loadDeployUnitFile(event) {
    const files: FileList = event.target.files;
    this.duFile = files[0].name;

    if (this.duFile) {
      const reader = new FileReader();
      reader.onload = (onLoadEvt) => {
        const data = (<any>onLoadEvt.target).result;
        Promise.resolve()
          .then(() => this.installer.installFromSource(this.tdef.deployUnits.array[0], data))
          .then((TypeConstructor) => {
            this.isDuLoaded = true;
          })
          .catch(() => {
            this.duError = true;
          });
      };

      try {
        reader.readAsText(files[0]);
      } catch (err) {
        this.logger.error('Unable to read DeployUnit file content.\n' + err.message);
      }
    } else {
      this.logger.error('Unable to load DeployUnit file. Did you select one?');
    }
  }

  resetFields() {
    this.resetTdefField();
    this.resetDuField();
  }

  private resetTdefField() {
    this.tdefFile = null;
    this.tdefError = false;
    this.isTdefLoaded = false;
    (<any> document.querySelector('input[name=load-tdef]')).value = '';
  }

  private resetDuField() {
    this.duFile = null;
    this.duError = false;
    this.isDuLoaded = false;
    (<any> document.querySelector('input[name=load-du]')).value = '';
  }
}
