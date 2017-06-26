import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kevscript',
  templateUrl: './kevscript.component.html',
})
export class KevScriptComponent {

  private _script: string;

  @Output()
  protected scriptChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  set script(val: string) {
    this._script = val;
    this.scriptChanged.emit(this._script);
  }

  get script(): string {
    return this._script;
  }
}
