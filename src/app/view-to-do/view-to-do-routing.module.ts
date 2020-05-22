import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewToDoPage } from './view-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: ViewToDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewToDoPageRoutingModule {}
