import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HotComponent } from './hot/hot.component';
import { ControversialComponent } from './controversial/controversial.component';
import { RisingComponent } from './rising/rising.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {PostListComponent } from './post-list/post-list.component';


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
    path: 'post/:id',
    component: PostDetailComponent
  },

  {
    path: 'post-list/:category',
    component: PostListComponent
  },

  {
    path: 'rising',
    component: RisingComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
