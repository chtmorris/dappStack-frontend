import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }       from './app.routing';

import { AppComponent }         from './app.component';
import { DappDetailComponent }  from './dapp-detail.component';
import { DappsComponent }       from './dapps.component';
import { DappService }          from './dapp.service';
import { DashboardComponent }   from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DappDetailComponent,
    DappsComponent
  ],
  providers: [
    DappService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
