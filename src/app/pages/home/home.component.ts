import { Component } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
import { KevoreeCoreService, State } from '../../services/kevoree-core.service';
import { KevScriptService } from '../../services/kevscript.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  name: string;
  script: string;

  constructor(public core: KevoreeCoreService, private logger: LoggerService,
              private kevs: KevScriptService) {
    this.name = 'node' + (Math.floor(Math.random() * 1000) + 1);
    this.script = `add ${this.name}: JavascriptNode/LATEST/LATEST
add ${this.name}.ticker: Ticker/LATEST/LATEST
add ${this.name}.printer: ConsolePrinter/LATEST/LATEST
add chan: LocalChannel/LATEST/LATEST

bind ${this.name}.ticker.tick chan
bind ${this.name}.printer.input chan`;
  }

  start() {
    if (this.core.state.getValue() === State.INIT || this.core.state.getValue() === State.STOPPED) {
      this.core.start(this.name)
        .then(() => {
          return this.kevs.interpret(this.script);
        })
        .then((model) => {
          return this.core.deploy(model);
        })
        .then(() => {
          this.logger.info('Platform bootstrapped successfully :)');
        });
    }
  }

  stop() {
    if (this.core.state.getValue() === State.STARTING || this.core.state.getValue() === State.STARTED) {
      this.core.stop();
    }
  }
}
