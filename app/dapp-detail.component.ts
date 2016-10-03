import { Component, Input } from '@angular/core';
import { Dapp } from './dapp';

@Component({
  selector: 'my-dapp-detail',
  template: `
    <div *ngIf="dapp">
      <h2>{{dapp.name}} details</h2>
      <div><label>id: </label>{{dapp.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="dapp.name" placeholder="name">
      </div>
    </div>
  `
})

export class DappDetailComponent {
  @Input()
  dapp: Dapp;
}
