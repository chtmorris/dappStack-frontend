import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Dapp } from './dapp';
import { DappService } from './dapp.service';

@Component({
  moduleId: module.id,
  selector: 'my-dapp-detail',
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
  `,
  styles: [`
    h1 {
      font-size: 1.2em;
      color: #999;
      margin-bottom: 0;
    }
    h2 {
      font-size: 2em;
      margin-top: 0;
      padding-top: 0;
    }
    nav a {
      padding: 5px 10px;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      background-color: #eee;
      border-radius: 4px;
    }
    nav a:visited, a:link {
      color: #607D8B;
    }
    nav a:hover {
      color: #039be5;
      background-color: #CFD8DC;
    }
    nav a.active {
      color: #039be5;
    }
  `],
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
