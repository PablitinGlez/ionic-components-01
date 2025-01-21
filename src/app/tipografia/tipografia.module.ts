import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipografiaPageRoutingModule } from './tipografia-routing.module';

import { TipografiaPage } from './tipografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipografiaPageRoutingModule
  ],
  declarations: [TipografiaPage]
})
export class TipografiaPageModule {}
