import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Dapp }         from './dapp';
import { DappService }  from './dapp.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  dapps: Dapp[] = [];

  constructor(
    private router: Router,
    private dappService: DappService
  ) { }

  ngOnInit(): void {
    this.dappService.getDapps()
      .then(dapps => this.dapps = dapps.slice(1, 5));
  }

  gotoDetail(dapp: Dapp): void {
    let link = ['/detail', dapp.id];
    this.router.navigate(link);
  }
}
