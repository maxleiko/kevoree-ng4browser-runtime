import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgGridConfig } from 'angular2-grid';

import { KevoreeCoreService, State } from '../../services/core.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  gridConfig: NgGridConfig = {
    cascade: 'left',
    max_cols: 9,
    margins: [5],
    resizable: true,
    auto_resize: true,
    col_width: 200,
    row_height: 175,
    min_width: 200,
    min_height: 175,
  };
  tiles = [];
  isDraggingOrResizing = false;

  constructor(private core: KevoreeCoreService, private router: Router) {
    if (this.core.state.getValue() === State.STARTED) {
      this.core.onDeploy.subscribe((components) => {
        // compare components with current tiles
        this.tiles.forEach((tile, i) => {
          const keep = Object.keys(components).find((path) => tile.path === path);
          if (!keep) {
            this.tiles.splice(i, 1);
          }
        });

        // only create tile for new instances
        Object.keys(components)
          .map((path) => components[path])
          .filter((instance) => {
            const found = this.tiles.find((tile) => instance.path === tile.path);
            return !found;
          })
          .forEach((instance) => {
            const comp = instance.getModelEntity();
            this.tiles.push({
              path: instance.path,
              name: instance.name,
              type: comp.typeDefinition.name + '/' + comp.typeDefinition.version,
              src: '/assets/iframes/tile.html?path=' + encodeURI(instance.path),
              started: instance.started,
              config: {
                dragHandle: '.tile-name',
                fixed: true
              }
            });
          });
      });
    }
  }

  onDragOrResizeStart(event) {
    this.isDraggingOrResizing = true;
  }

  onDragOrResizeStop(event) {
    this.isDraggingOrResizing = false;
  }
}
