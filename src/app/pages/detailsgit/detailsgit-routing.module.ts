import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsgitPage } from './detailsgit.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsgitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsgitPageRoutingModule {}
