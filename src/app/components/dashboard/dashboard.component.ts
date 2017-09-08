import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { KevoreeCoreService, State } from '../../services/core.service';

export interface Tile {
  path: string;
  name: string;
  type: string;
  src: string;
  started: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

  tiles: Tile[] = [];

  constructor(private core: KevoreeCoreService, private router: Router) {
    if (this.core.state.getValue() === State.STARTED) {
      this.core.onDeploy.subscribe((components) => {
        Object.keys(components).forEach((path) => {
          const tile = this.tiles.find(t => t.path === path);
          if (!tile) {
            const elem = components[path].getModelEntity();
            if (elem) {
              this.tiles.push({
                path,
                name: components[path].getName(),
                type: elem.typeDefinition.name + '/' + elem.typeDefinition.version,
                src: '/assets/iframes/tile.html?path=' + encodeURI(path),
                started: components[path].started
              });
            }
          }
        });
      });
    }
  }
}
