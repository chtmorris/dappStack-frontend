import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Dapp } from './dapp';
import { DappService } from './dapp.service';

@Component({
  moduleId: module.id,
  selector: 'my-dapps',
  template:`
    <h2>My Dapps</h2>
    <ul class="heroes">
      <li *ngFor="let dapp of dapps"
        [class.selected]="dapp === selectedDapp"
        (click)="onSelect(dapp)">
        <span class="badge">{{dapp.id}}</span> {{dapp.name}}
      </li>
    </ul>
    <div *ngIf="selectedDapp">
      <h2>
        {{selectedDapp.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
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
