import { Component } from '@angular/core';

import { LoggerService } from '../../services/logger.service';
import { KevoreeCoreService } from '../../services/kevoree-core.service';
import { KevScriptService, InterpretCallback } from '../../services/kevscript.service';

enum State {
  INIT, STARTING, STARTED, STOPPING, STOPPED
};

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private nodeName = 'node' + (Math.floor(Math.random() * 1000) + 1);
  private bootstrapScript = `add ${this.nodeName}: JavascriptNode/LATEST/LATEST`;
  private state = State.STOPPED;
  private btn = 'Start';
  private isClickable = true;

  constructor(private logger: LoggerService, private kCore: KevoreeCoreService,
              private kevs: KevScriptService) {}

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
      this.kCore.start(this.nodeName)
        .then(() => {
          this.state = State.STARTED;
          this.btn = 'Stop';
          this.isClickable = true;
          return this.kevs.interpret(this.bootstrapScript);
        })
        .then((res: InterpretCallback) => {
          return this.kCore.deploy(res.model);
        })
        .then(() => {
          this.logger.info('Deployed!');
        });
    }
  }

  stop() {
    if (this.state === State.STARTING || this.state === State.STARTED) {
      this.isClickable = false;
      this.state = State.STOPPING;
      this.btn = 'Stopping...';
      this.kCore.stop().then(() => {
        this.state = State.STOPPED;
        this.btn = 'Start';
        this.isClickable = true;
      });
    }
  }
}
