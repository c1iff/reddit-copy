import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {PostListComponent } from './post-list/post-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PostListComponent
  },

  {
    path: 'post/:id',
    component: PostDetailComponent
  },

  {
    path: 'post-list/:category',
    component: PostListComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
