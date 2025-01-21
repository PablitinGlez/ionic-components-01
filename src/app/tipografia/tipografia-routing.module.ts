import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipografiaPage } from './tipografia.page';

const routes: Routes = [
  {
    path: '',
    component: TipografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipografiaPageRoutingModule {}
