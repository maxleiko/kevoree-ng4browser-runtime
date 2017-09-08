import { Component } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
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

  constructor(public core: KevoreeCoreService, private logger: LoggerService,
    private kevs: KevScriptService) {
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
          console.log(err.stack);
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
}
