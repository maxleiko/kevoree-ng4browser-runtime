import { Injectable, OnInit, OnDestroy } from '@angular/core';

import KevoreeCore from 'kevoree-core';

import { LoggerService } from './logger.service';
import { KevScriptService } from './kevscript.service';

@Injectable()
export class KevoreeCoreService {

  private core: KevoreeCore;

  constructor(private logger: LoggerService, private kevs: KevScriptService) {
    logger.debug('Initiating KevoreeCoreService...');
    this.core = new KevoreeCore(kevs.getInstance(), '_browser_fake_', logger);
    logger.debug('KevoreeCoreService initiated');
  }

  start(nodeName: string): Promise<void> {
    this.logger.debug('Starting Kevoree core...');
    this.logger.debug('Kevoree core started');
    this.core.start(nodeName);
    return Promise.resolve();
  }

  deploy(model: ContainerRoot): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.core.deploy(model, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  stop(): Promise<void> {
    this.logger.debug('Stopping Kevoree core...');
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.logger.debug('Kevoree core stopped');
        resolve();
      }, 1000);
    });
  }
}
