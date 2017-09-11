import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { InstallerService } from './installer.service';
import KevoreeModuleLoader from 'kevoree-module-loader';

@Injectable()
export class ResolverService {

  constructor(private logger: LoggerService, private installer: InstallerService) {}

  resolve(du: DeployUnit): Promise<Function> {
    if (KevoreeModuleLoader.has(du.name, du.version)) {
      return Promise.resolve(KevoreeModuleLoader.require(du.name, du.version));
    } else {
      return this.installer.install(du);
    }
  }

  uninstall(du: DeployUnit): Promise<void> {
    return this.installer.uninstall(du);
  }
}
