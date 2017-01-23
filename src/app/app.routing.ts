import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
