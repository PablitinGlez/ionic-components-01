import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecboxPageRoutingModule } from './checbox-routing.module';

import { ChecboxPage } from './checbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecboxPageRoutingModule
  ],
  declarations: [ChecboxPage]
})
export class ChecboxPageModule {}
