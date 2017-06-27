import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

import kevoree from 'kevoree-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private logger: LoggerService) {
    const factory = new kevoree.factory.DefaultKevoreeFactory();
    logger.info(`Kevoree MetaModel v${factory.getVersion()}`);
  }
}
