import {
  Component, Input, Output, EventEmitter, Renderer, AfterViewInit
} from '@angular/core';

import * as kevoree from 'kevoree-library';
import * as CodeMirror from 'codemirror';

import { KevScriptService } from '../../services/kevscript.service';
import { KevoreeCoreService } from '../../services/kevoree-core.service';

@Component({
  selector: 'app-kevscript',
  template: '<div id="kevscript-editor"></div>',
  styles: [
    '#kevscript-editor { height: 400px; }'
  ]
})
export class KevScriptComponent implements AfterViewInit {

  private factory: any;
  private ctxVars: { [key: string]: string };
  private editor: any;
  private _script: string;

  @Output()
  scriptChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private renderer: Renderer, private kevs: KevScriptService,
              private core: KevoreeCoreService) {
    this.factory = new kevoree.factory.DefaultKevoreeFactory();
  }

  ngAfterViewInit(): void {
    CodeMirror.hint.kevscript.async = true;
    this.editor = new CodeMirror(
      this.renderer.selectRootElement('#kevscript-editor'), {
        mode: 'kevscript',
        theme: 'kevscript',
        lineWrapping: true,
        lineNumbers: true,
        styleActiveLine: true,
        extraKeys: {
          'Ctrl-Space': (cm) => {
            window['cm'] = cm;
            cm.showHint({
              hint: CodeMirror.hint.kevscript,
              getModel: () => this.getModel(),
              completeSingle: false,
              alignWithWord: false
            });
          },
        },
        gutters: ['CodeMirror-lint-markers'],
        lint: {
          getAnnotations: CodeMirror.lint.kevscript(this.kevs.getInstance(), () => this.getModel(), this.ctxVars),
          async: true
        }
      });
    if (this._script) {
      this.editor.setValue(this._script);
    }
    this.editor.refresh();
  }

  @Input()
  set script(val: string) {
    this._script = val;
    if (this.editor) {
      this.editor.setValue(this._script);
    }
  }

  get script(): string {
    return this._script;
  }

  private getModel(): ContainerRoot {
    let model = this.core.getModel();
    if (!model) {
      model = this.factory.createContainerRoot().withGenerated_KMF_ID('0.0');
      this.factory.root(model);
    }
    return model;
  }
}
