import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DappsComponent }       from './dapps.component';
import { DashboardComponent }   from './dashboard.component';
import { DappDetailComponent }  from './dapp-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dapps',
    component: DappsComponent
  },
  {
    path: 'detail/:id',
    component: DappDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
