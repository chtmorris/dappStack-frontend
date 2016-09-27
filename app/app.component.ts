import { Component } from '@angular/core';

export class Dapp {
  id: number;
  name: string;
}

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
