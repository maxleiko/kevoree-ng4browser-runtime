import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import KevScript from 'kevoree-kevscript';

export interface InterpretCallback {
  model: ContainerRoot;
  warnings: Array<string>;
}

@Injectable()
export class KevScriptService {

  private kevs: KevScript;

  constructor(private logger: LoggerService) {
    logger.debug('Initiating KevScriptService...');
    this.kevs = new KevScript(logger);
    logger.debug('KevScriptService initiated');
  }

  interpret(script: string, ctxModel?: ContainerRoot, ctxVars?: { [key: string]: string }): Promise<InterpretCallback> {
    this.logger.debug(`Interpreting script:\n${script}`);
    return this.kevs.parse(script, ctxModel, ctxVars);
  }

  parseModel(model: ContainerRoot): string {
    return this.kevs.parseModel(model);
  }

  getInstance(): KevScript {
    return this.kevs;
  }
}
