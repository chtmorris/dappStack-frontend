import { Component, OnInit } from '@angular/core';

import { Dapp }         from './dapp';
import { DappService }  from './dapp.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `
    <h3>Top Dapps</h3>
    <div class="grid grid-pad">
      <div *ngFor="let dapp of dapps" (click)="gotoDetail(dapp)" class="col-1-4">
        <div class="module hero">
          <h4>{{dapp.name}}</h4>
        </div>
      </div>
    </div>
  `,
})

export class DashboardComponent implements OnInit {

  dapps: Dapp[] = [];

  constructor(private dappService: DappService) { }

  ngOnInit(): void {
    this.dappService.getDapps()
      .then(dapps => this.dapps = dapps.slice(1, 5));
  }

  gotoDetail(dapp: Dapp): void { }
}
