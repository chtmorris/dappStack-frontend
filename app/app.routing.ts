import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DappsComponent }       from './dapps.component';

const appRoutes: Routes = [
  {
    path: 'dapps',
    component: DappsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
