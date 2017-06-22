import { Component } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { LoggerService } from '../../services/logger.service';
import { TinyConfService } from '../../services/tiny-conf.service';

@Component({
  templateUrl: './settings.component.html',
  providers: [ LocalStorageService ]
})
export class SettingsComponent {
  @LocalStorage('registry', 'https://registry.kevoree.org')
  private registry: string;
  private registryTimeout;

  constructor(private logger: LoggerService, private config: TinyConfService,
              private storage: LocalStorageService) {
    this.updateRegistry(storage.retrieve('registry'));
  }

  private updateRegistry(registry: string): void {
    clearTimeout(this.registryTimeout);
    this.registryTimeout = setTimeout(() => {
      try {
        const registryUrl = new URL(registry);
        this.config.set({
          registry: {
            host: registryUrl.host,
            port: registryUrl.port,
            ssl: registryUrl.protocol === 'https:'
          }
        });
        this.logger.info(`Kevoree Registry URL: ${registry}`);
      } catch (e) {
        this.logger.error(`Malformed Kevoree Registry URL: ${registry}`);
      }
    }, 800);
  }
}
