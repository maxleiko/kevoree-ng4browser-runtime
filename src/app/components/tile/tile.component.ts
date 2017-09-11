import { Component, Input } from '@angular/core';

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
}
