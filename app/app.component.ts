import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/dapps">Dapps</a>
    </nav>
    <router-outlet></router-outlet>
  `

})

export class AppComponent {
  title = 'Dapp Stack';
}
