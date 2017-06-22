import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kevscript',
  templateUrl: './kevscript.component.html',
})
export class KevScriptComponent {

  @Input()
  private script: string;
}
