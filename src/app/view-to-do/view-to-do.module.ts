import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewToDoPageRoutingModule } from './view-to-do-routing.module';

import { ViewToDoPage } from './view-to-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewToDoPageRoutingModule
  ],
  declarations: [ViewToDoPage]
})
export class ViewToDoPageModule {}
