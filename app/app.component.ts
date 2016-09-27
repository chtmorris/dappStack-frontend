import { Component } from '@angular/core';

export class Dapp {
  id: number;
  name: string;
}

const DAPPS: Dapp[] = [
  { id: 11, name: 'Dapp Mr. Nice' },
  { id: 12, name: 'Dapp Narco' },
  { id: 13, name: 'Dapp Bombasto' },
  { id: 14, name: 'Dapp Celeritas' },
  { id: 15, name: 'Dapp Magneta' },
  { id: 16, name: 'Dapp RubberMan' },
  { id: 17, name: 'Dapp Dynama' },
  { id: 18, name: 'Dapp Dr IQ' },
  { id: 19, name: 'Dapp Magma' },
  { id: 20, name: 'Dapp Tornado' }
];

@Component({
  selector: 'my-app',
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
  template: `
    <h1>{{title}}</h1>

    <div *ngIf="selectedDapp">
      <h2>{{selectedDapp.name}} details</h2>
      <div><label>id: </label>{{selectedDapp.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedDapp.name" placeholder="name">
      </div>
    </div>

    <h2>Dapps</h2>
    <ul class="heroes">
      <li *ngFor="let dapp of dapps"
        [class.selected]="dapp === selectedDapp"
        (click)="onSelect(dapp)">
        <span class="badge">{{dapp.id}}</span> {{dapp.name}}
      </li>
    </ul>
  `
})

export class AppComponent {
  title = 'Dapps';
  dapps = DAPPS;
  selectedDapp: Dapp;

  onSelect(dapp: Dapp): void {
    this.selectedDapp = dapp;
  }
}
