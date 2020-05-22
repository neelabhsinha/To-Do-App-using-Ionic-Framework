import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-to-do',
    loadChildren: () => import('./new-to-do/new-to-do.module').then( m => m.NewToDoPageModule)
  },
  {
    path: 'edit-to-do',
    loadChildren: () => import('./edit-to-do/edit-to-do.module').then( m => m.EditToDoPageModule)
  },
  {
    path: 'view-to-do',
    loadChildren: () => import('./view-to-do/view-to-do.module').then( m => m.ViewToDoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
