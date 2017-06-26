import { Component } from '@angular/core';

import { KevoreeCoreService } from '../../services/kevoree-core.service';

export interface Tile {
  name: string;
  type: string;
  src: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

  private tiles: Tile[];

  constructor(private core: KevoreeCoreService) {
    this.core.onDeploy.subscribe((components) => {
      this.tiles = Object.keys(components).map((path) => {
        const elem = components[path].getModelEntity();
        return {
          name: components[path].getName(),
          type: elem.typeDefinition.name + '/' + elem.typeDefinition.version,
          src: '/assets/iframes/tile.html?path=' + encodeURI(path)
        };
      });
    });
  }
}
