import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

import kevoree from 'kevoree-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private logsVisible = false;

  constructor(private logger: LoggerService) {
    const factory = new kevoree.factory.DefaultKevoreeFactory();
    logger.info(`Kevoree MetaModel v${factory.getVersion()}`);
  }

  toggleLogs(): void {
    this.logsVisible = !this.logsVisible;
  }
}
