/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/* Kevoree Library decl */
interface ContainerRoot {
  nodes: any[];
  groups: any[];
  hubs: any[];
  packages: any[];
}
interface DeployUnit {
  name: string;
  version: string;
  hashcode: string;
  filters: { array: any[] };
}
interface TypeDefinition {
  name: string;
  version: number;
  deployUnits: { array: Array<DeployUnit> };
}
