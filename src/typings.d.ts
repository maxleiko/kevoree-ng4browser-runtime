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
