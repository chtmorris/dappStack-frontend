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
  template: `
    <h1>{{title}}</h1>
    <h2>{{dapp.name}} details</h2>
    <div><label>id: </label>{{dapp.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="dapp.name" placeholder="name">
    </div>
  `
})

export class AppComponent {
  title = 'Dapps';
  dapp: Dapp = {
      id: 1,
      name: 'Dapp 1'
  }
}
