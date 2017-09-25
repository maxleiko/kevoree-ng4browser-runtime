import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { KevoreeCoreService } from '../../services/core.service';

export interface Tile {
  path: string;
  name: string;
  type: string;
  src: string;
  started: boolean;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements Tile {
  @Input()
  path: string;

  @Input()
  name: string;

  @Input()
  type: string;

  @Input()
  src: string;

  @Input()
  started: boolean;

  constructor(private core: KevoreeCoreService, private modalService: NgbModal) { }

  start() {
    return this.core.startComponent(this.name)
      .then(() => {
        this.started = true;
      });
  }

  stop() {
    return this.core.stopComponent(this.name)
      .then(() => {
        this.started = false;
      });
  }

  remove(content) {
    this.modalService.open(content).result
      .then((result) => {
        if (result === 'remove') {
          return this.core.removeComponent(this.name);
        }
      });
  }
}
