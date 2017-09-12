import {
  Component, Input, Output, EventEmitter, Renderer, AfterViewInit
} from '@angular/core';

import * as kevoree from 'kevoree-library';
import * as CodeMirror from 'codemirror';

import 'cm-mode-kevscript/src/mode/kevscript';
import 'cm-mode-kevscript/src/lint/lint';
import 'cm-mode-kevscript/src/hint/hint';

import { KevScriptService } from '../../services/kevscript.service';
import { KevoreeCoreService } from '../../services/core.service';

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

  @Output()
  onLintStart: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  onLintDone: EventEmitter<void> = new EventEmitter<void>();

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
    this.editor.on('changes', (cm) => {
      this._script = cm.getValue();
      this.scriptChanged.emit(this._script);
    });

    this.editor.on('lintStart', () => {
      this.onLintStart.emit();
    });

    this.editor.on('lintDone', () => {
      this.onLintDone.emit();
    });
  }

  @Input()
  set script(val: string) {
    if (this.editor) {
      if (val !== this._script) {
        this.editor.setValue(val);
      }
    }
    this._script = val;
    this.scriptChanged.emit(this._script);
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
