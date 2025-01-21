import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecboxPage } from './checbox.page';

const routes: Routes = [
  {
    path: '',
    component: ChecboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecboxPageRoutingModule {}
