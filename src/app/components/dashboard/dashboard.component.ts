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
    max_cols: 6,
    margins: [7],
    resizable: true,
    col_width: 300,
    row_height: 327,
    min_width: 300,
    min_height: 327,
  };
  tiles = [];
  isDraggingOrResizing = false;

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
                started: components[path].started,
                config: {
                  dragHandle: '.tile-header',
                  fixed: true
                }
              });
            }
          }
        });
      });
    }
  }

  onDragStart(event) {
    this.isDraggingOrResizing = true;
  }

  onDragStop(event) {
    this.isDraggingOrResizing = false;
  }

  onResizeStart(event) {
    this.isDraggingOrResizing = true;
  }

  onResizeStop(event) {
    this.isDraggingOrResizing = false;
  }
}
