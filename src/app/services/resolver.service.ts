import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import KevoreeModuleLoader from '../lib/kevoree-module-loader';

export interface ResolverCallback {
  err?: Error;
  instanceType?: FunctionConstructor;
}

@Injectable()
export class ResolverService {

  private msgListener: (event: MessageEvent) => any;

  constructor(private logger: LoggerService) {
    this.msgListener = (event) => {

    };
  }

  resolve(du: DeployUnit): Promise<ResolverCallback> {
    if (KevoreeModuleLoader.has(du.name, du.version)) {
      return Promise.resolve<ResolverCallback>({
        err: null,
        instanceType: KevoreeModuleLoader.require(du.name, du.version)
      });
    } else {
      return new Promise<ResolverCallback>((resolve, reject) => {
        this.logger.debug('ResolverService', `Resolving ${du.name}@${du.version}...`);
        const iframe = document.createElement('iframe');
        iframe.id = du.name + '-' + du.version;
        iframe.src = `/assets/iframes/installer.html?name=${encodeURI(du.name)}&version=${encodeURI(du.version)}`;
        iframe.classList.add('hide');

        const messageListener = (event: MessageEvent) => {
          if (event.origin === window.location.origin) {
            switch (event.data.type) {
              case 'error':
                reject({ err: new Error(event.data.error) });
                break;

              case 'done':
                window.removeEventListener('message', messageListener);
                resolve({
                  instanceType: KevoreeModuleLoader.require(du.name, du.version)
                });
                break;
            }
          }
        };
        window.addEventListener('message', messageListener);
        document.body.appendChild(iframe);
      });
    }
  }

  uninstall(du: DeployUnit): Promise<void> {
    return Promise.resolve();
  }
}
