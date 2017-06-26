import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import KevScript from 'kevoree-kevscript';

export interface InterpretCallback {
  err: Error;
  model: ContainerRoot;
  warnings: any[];
}

@Injectable()
export class KevScriptService {

  private kevs: KevScript;

  constructor(private logger: LoggerService) {
    logger.debug('Initiating KevScriptService...');
    this.kevs = new KevScript(logger);
    logger.debug('KevScriptService initiated');
  }

  interpret(script: string, ctxModel?: ContainerRoot): Promise<InterpretCallback> {
    this.logger.debug(`Interpreting script:\n${script}`);
    return new Promise<InterpretCallback>((resolve) => {
      this.kevs.parse(script, ctxModel ? ctxModel : null, (err, model, warnings) => {
        resolve({ err, model, warnings });
      });
    });
  }

  getInstance(): KevScript {
    return this.kevs;
  }
}
