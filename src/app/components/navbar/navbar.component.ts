import { Component } from '@angular/core';

import { KevoreeCoreService } from '../../services/kevoree-core.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

  tilesCount: number;

  constructor(public core: KevoreeCoreService) {
    core.onDeploy.subscribe((comps) => {
      this.tilesCount = Object.keys(comps).length;
    });
  }
}
