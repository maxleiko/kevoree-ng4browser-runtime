import { Component } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
import { KevoreeCoreService } from '../../services/kevoree-core.service';
import { KevScriptService } from '../../services/kevscript.service';

enum State {
  INIT = 0, STARTING = 1, STARTED = 2, STOPPING = 3, STOPPED = 4
};

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private name: string;
  private script: string;
  private state: State;
  private btn: string;
  private isClickable: boolean;

  constructor(private logger: LoggerService, private core: KevoreeCoreService,
              private kevs: KevScriptService) {
    this.name = 'node' + (Math.floor(Math.random() * 1000) + 1);
    this.script = `add ${this.name}: JavascriptNode/LATEST/LATEST
add ${this.name}.ticker: Ticker/LATEST/LATEST
add ${this.name}.printer: ConsolePrinter/LATEST/LATEST
add chan: LocalChannel/LATEST/LATEST

bind ${this.name}.ticker.tick chan
bind ${this.name}.printer.input chan`;
    this.state = State.STOPPED;
    this.btn = 'Start';
    this.isClickable = true;
  }

  click() {
    switch (this.state) {
      case State.STARTED:
        this.stop();
        break;

      case State.STOPPED:
        this.start();
        break;
    }
  }

  start() {
    if (this.state === State.STOPPED) {
      this.isClickable = false;
      this.state = State.STARTING;
      this.btn = 'Starting...';
      this.core.start(this.name)
        .then(() => {
          this.state = State.STARTED;
          this.btn = 'Stop';
          this.isClickable = true;
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
    if (this.state === State.STARTING || this.state === State.STARTED) {
      this.isClickable = false;
      this.state = State.STOPPING;
      this.btn = 'Stopping...';
      this.core.stop().then(() => {
        this.state = State.STOPPED;
        this.btn = 'Start';
        this.isClickable = true;
      });
    }
  }
}
