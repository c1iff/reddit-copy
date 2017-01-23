import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ControversialComponent } from './controversial/controversial.component';
import { HotComponent } from './hot/hot.component';
import { RisingComponent } from './rising/rising.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewComponent
  },

  {
    path: 'controversial',
    component: ControversialComponent
  },

  {
    path: 'hot',
    component: HotComponent
  },

  {
    path: 'rising',
    component: RisingComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
