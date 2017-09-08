import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class LoggerFactoryService {

  constructor(private logger: LoggerService) {}

  create(): LoggerService {
    return this.logger;
  }

  remove() { /* noop */ }
  add()    { /* noop */ }
  delete() { /* noop */ }
}
