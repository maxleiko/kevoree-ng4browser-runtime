import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import KevoreeModuleLoader from 'kevoree-module-loader';

@Injectable()
export class ResolverService {

  constructor(private logger: LoggerService) {}

  resolve(du: DeployUnit): Promise<Function> {
    if (KevoreeModuleLoader.has(du.name, du.version)) {
      return Promise.resolve(KevoreeModuleLoader.require(du.name, du.version));
    } else {
      return new Promise<Function>((resolve, reject) => {
        this.logger.debug(`Resolving ${du.name}@${du.version}...`);
        const iframe = document.createElement('iframe');
        iframe.id = du.name + '-' + du.version;
        iframe.src = `/assets/iframes/installer.html?name=${encodeURI(du.name)}&version=${encodeURI(du.version)}`;
        iframe.classList.add('hide');

        const messageListener = (event: MessageEvent) => {
          if (event.origin === window.location.origin) {
            switch (event.data.type) {
              case 'error':
                reject(new Error(event.data.error));
                break;

              case 'done':
                window.removeEventListener('message', messageListener);
                resolve(KevoreeModuleLoader.require(du.name, du.version));
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
