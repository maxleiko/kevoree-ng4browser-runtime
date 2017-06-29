import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/Rx';

import KevoreeCore from 'kevoree-core';

import { LoggerService } from './logger.service';
import { KevScriptService } from './kevscript.service';
import { ResolverService, ResolverCallback } from './resolver.service';

import KevoreeInstanceLoader from '../lib/kevoree-instance-loader';

export enum State {
  INIT = 0, STARTING = 1, STARTED = 2, STOPPING = 3, STOPPED = 4
}

@Injectable()
export class KevoreeCoreService {
  private core: KevoreeCore;
  public state: BehaviorSubject<State>;
  public onDeploy: BehaviorSubject<{ [key: string]: any }>;

  constructor(private logger: LoggerService, private kevs: KevScriptService,
              private resolver: ResolverService) {
    logger.debug('Initiating KevoreeCoreService...');
    this.state = new BehaviorSubject<State>(State.INIT);
    this.onDeploy = new BehaviorSubject<{ [key: string]: any }>([]);
    this.core = new KevoreeCore(kevs.getInstance(), '_browser_fake_', logger);
    this.core.setBootstrapper({
      name: 'BrowserResolver',
      bootstrapNodeType(nodeName, model, done) {
        const node = model.findNodesByID(nodeName);
        if (node) {
          const meta = node.typeDefinition
            .select('deployUnits[]/filters[name=platform,value=js]');
          if (meta.size() > 0) {
            resolver.resolve(meta.get(0).eContainer())
              .then((res: ResolverCallback) => {
                done(res.err, res.instanceType);
              })
              .catch(done);
          } else {
            const err = new Error(`No DeployUnit found for '${nodeName}' that matches the 'js' platform`);
            done(err);
          }
        } else {
          const err = new Error(`Unable to find '${nodeName}' in given model`);
          done(err);
        }
      },
      bootstrap(du, forceInstall, done) {
        resolver.resolve(du)
          .then((res) => {
            done(res.err, res.instanceType);
          })
          .catch(done);
      },
      resolve(du, forceInstall, done) {
        resolver.resolve(du)
          .then((res) => {
            done(res.err, res.instanceType);
          })
          .catch(done);
      },
      uninstall(du, done) {
        resolver.uninstall(du)
          .then(done)
          .catch(done);
        logger.debug(this.name, `Uninstalling DeployUnit ${du.name}@${du.version}...`);
      },
    });

    this.core.on('stopped', () => {
      this.state.next(State.STOPPED);
    });

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
    return new Promise<void>((resolve, reject) => {
      this.core.deploy(model, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  submitScript(script: string) {
    this.core.submitScript(script);
  }

  stop(): Promise<void> {
    this.state.next(State.STOPPING);
    this.logger.debug('Stopping Kevoree core...');
    return new Promise<void>((resolve) => {
      this.core.on('stopped', resolve);
      this.core.stop();
    });
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
