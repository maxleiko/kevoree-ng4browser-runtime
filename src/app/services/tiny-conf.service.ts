import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import TinyConf from 'tiny-conf';

import { LoggerService } from './logger.service';

@Injectable()
export class TinyConfService {

  constructor(private logger: LoggerService, private storage: LocalStorageService) {
    logger.debug('Initiating TinyConfService...');
    const registryUrl = new URL(storage.retrieve('registry'));
    const host = registryUrl.host;
    const ssl = registryUrl.protocol === 'https:';
    const port = registryUrl.port.length === 0 ? (ssl ? 443 : 80) : parseInt(registryUrl.port, 10);
    TinyConf.set('registry', { host, port, ssl });
  }

  set(key: any, val?: any): void {
    if (typeof val === 'undefined') {
      TinyConf.set(key);
    } else {
      TinyConf.set(key, val);
    }
  }

  get(key?: string): any {
    return TinyConf.get(key);
  }
}
