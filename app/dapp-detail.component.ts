import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Dapp } from './dapp.service';
import { DappService } from './dapp.service';

@Component({
  selector: 'my-dapp-detail',
  // templateUrl: 'dapp-detail.component.html',
  template: `
    <div *ngIf="dapp">
      <h2>{{dapp.name}} details</h2>
      <div><label>id: </label>{{dapp.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="dapp.name" placeholder="name">
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `
})

export class DappDetailComponent implements OnInit {
  @Input()
  dapp: Dapp;

  constructor(
    private dappService: DappService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.dappService.getDapp(id)
        .then(dapp => this.dapp = dapp);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
