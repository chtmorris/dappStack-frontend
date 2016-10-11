import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Dapp } from './dapp';
import { DappService } from './dapp.service';

@Component({
  moduleId: module.id
  selector: 'my-dapps',
  templateUrl: 'dapps.component.html',
  styleUrls: [ 'dapps.component.css' ],
  providers: [DappService],
})

export class DappsComponent implements OnInit{
  title = 'Dapps';
  dapps: Dapp[];
  selectedDapp: Dapp;

  constructor(
    private router: Router,
    private dappService: DappService
  ) { }

  getDapps(): void {
    this.dappService.getDapps().then(dapps => this.dapps = dapps);
  }

  onSelect(dapp: Dapp): void {
    this.selectedDapp = dapp;
  }

  ngOnInit(): void {
    this.getDapps();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDapp.id]);
  }
}
