class KevoreeModuleLoader {

  private modules: { [key: string]: any };

  constructor() {
    this.modules = {};
  }

  register(name, version, module) {
    this.modules[`${name}@${version}`] = module;
  }

  has(name, version) {
    return Boolean(this.modules[this.createKey(name, version)]);
  }

  require(name, version) {
    const key = this.createKey(name, version);
    const module = this.modules[key];
    if (module) {
      return module;
    }
    throw new Error(`KevoreeModule "${key}" not found`);
  }

  remove(name, version) {
    delete this.modules[this.createKey(name, version)];
  }

  private createKey(name: string, version: string): string {
    return `${name}@${version}`;
  }
}

window['KevoreeModuleLoader'] = window['KevoreeModuleLoader'] || new KevoreeModuleLoader();

export default <KevoreeModuleLoader> window['KevoreeModuleLoader'];
