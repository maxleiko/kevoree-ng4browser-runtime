import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import KevoreeModuleLoader from 'kevoree-module-loader';

import { LoggerService } from './logger.service';
import { genId } from '../lib/utils';

@Injectable()
export class InstallerService {

  constructor(private logger: LoggerService) {}

  install(du: DeployUnit): Promise<Function> {
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

  installFromSource(du: DeployUnit, source: string): Promise<Function> {
    return new Promise<Function>((resolve, reject) => {
      const sourceId = genId();
      this.logger.debug(`Installing ${du.name}@${du.version} from source ${sourceId}...`);
      const iframe = document.createElement('iframe');
      iframe.id = du.name + '-' + du.version;
      iframe.src = `/assets/iframes/installer.html?name=${encodeURI(du.name)}&version=${encodeURI(du.version)}&id=${sourceId}`;
      iframe.classList.add('hide');

      const messageListener = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
          switch (event.data.type) {
            case 'error':
              reject(new Error(event.data.error));
              break;

            case 'done':
              window.removeEventListener('message', messageListener);
              delete window[sourceId];
              resolve(KevoreeModuleLoader.require(du.name, du.version));
              break;
          }
        }
      };
      window.addEventListener('message', messageListener);
      window[sourceId] = source;
      document.body.appendChild(iframe);
    });
  }

  uninstall(du: DeployUnit): Promise<void> {
    $(`#${du.name}-${du.version}`).remove();
    return Promise.resolve();
  }
}
