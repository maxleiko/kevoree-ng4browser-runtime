import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import KevScript from 'kevoree-kevscript';

@Injectable()
export class KevScriptService {

  private kevs: KevScript;

  constructor(private logger: LoggerService) {
    logger.debug('Initiating KevScriptService...');
    this.kevs = new KevScript(logger);
    logger.debug('KevScriptService initiated');
  }

  interpret(script: string, ctxModel?: ContainerRoot): Promise<ContainerRoot> {
    this.logger.debug(`Interpreting script:\n${script}`);
    return new Promise<ContainerRoot>((resolve, reject) => {
      this.kevs.parse(script, ctxModel ? ctxModel : null, (err, model, warnings) => {
        if (err) {
          this.logger.error('KevScript', err.stack);
          reject(err);
        } else {
          resolve(model);
        }
      });
    });
  }

  parseModel(model: ContainerRoot): string {
    return this.kevs.parseModel(model);
  }

  getInstance(): KevScript {
    return this.kevs;
  }
}
