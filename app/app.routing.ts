import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DappsComponent }       from './dapps.component';
import { DashboardComponent }   from './dashboard.component';

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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
