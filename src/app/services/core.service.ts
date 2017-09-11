import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/Rx';

import kevoree from 'kevoree-library';
import KevoreeCore from 'kevoree-core';

import { LoggerService } from './logger.service';
import { LoggerFactoryService } from './logger-factory.service';
import { KevScriptService } from './kevscript.service';
import { ResolverService } from './resolver.service';

import KevoreeInstanceLoader from '../lib/kevoree-instance-loader';

export enum State {
  INIT = 0, STARTING = 1, STARTED = 2, STOPPING = 3, STOPPED = 4
}

@Injectable()
export class KevoreeCoreService {
  private core: KevoreeCore;
  public state: BehaviorSubject<State>;
  public onDeploy: BehaviorSubject<{ [key: string]: any }>;

  constructor(private loggerFactory: LoggerFactoryService, private logger: LoggerService,
              private kevs: KevScriptService, private resolver: ResolverService) {
    logger.debug('Initiating KevoreeCoreService...');
    this.state = new BehaviorSubject<State>(State.INIT);
    this.onDeploy = new BehaviorSubject<{ [key: string]: any }>([]);
    this.core = new KevoreeCore(resolver, kevs.getInstance(), loggerFactory);

    this.core.on('stopped', () => {
      this.state.next(State.STOPPED);
    });

    this.core.on('error', (error) => console.error(error.stack));

    this.core.on('deployed', () => {
      const currentKeys = Object.keys(this.core.nodeInstance.adaptationEngine.modelObjMapper.map);
      const registeredKeys = Object.keys(KevoreeInstanceLoader.getInstances());

      currentKeys
        .forEach((key) => {
          const instance = this.core.nodeInstance.adaptationEngine.modelObjMapper.map[key];
          if (instance && typeof instance.uiFactory === 'function') {
            if (!KevoreeInstanceLoader.has(key)) {
              KevoreeInstanceLoader.register(key, instance);
            }
          }
        });

      for (let i = 0; i < registeredKeys.length; i++) {
        const hasKey = currentKeys.find((key) => registeredKeys[i] === key);
        if (!hasKey) {
          // clean removed instance
          KevoreeInstanceLoader.remove(registeredKeys[i]);
        }
      }

      this.onDeploy.next(KevoreeInstanceLoader.getInstances());
    });
    logger.debug('KevoreeCoreService initiated');
  }

  start(nodeName: string): Promise<void> {
    this.state.next(State.STARTING);
    this.logger.debug('Starting Kevoree core...');
    this.core.start(nodeName);
    this.state.next(State.STARTED);
    return Promise.resolve();
  }

  deploy(model: ContainerRoot): Promise<void> {
    return this.core.deploy(model);
  }

  merge(model: ContainerRoot): Promise<void> {
    const currentModel = this.core.getCurrentModel();
    const factory = new kevoree.factory.DefaultKevoreeFactory();
    const compare = factory.createModelCompare();
    compare.merge(model, currentModel).applyOn(model);
    return this.core.deploy(model);
  }

  submitScript(script: string): Promise<void> {
    return this.core.submitScript(script);
  }

  stop(): Promise<void> {
    this.state.next(State.STOPPING);
    this.logger.debug('Stopping Kevoree core...');
    return this.core.stop();
  }

  isBootstrapped() {
    return this.core.nodeInstance ? this.core.nodeInstance.started : false;
  }

  getNodeName() {
    return this.core.nodeInstance.name;
  }

  getModel(): ContainerRoot {
    return this.core.getCurrentModel();
  }
}
