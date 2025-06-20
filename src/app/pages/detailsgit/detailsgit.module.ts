import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsgitPageRoutingModule } from './detailsgit-routing.module';

import { DetailsgitPage } from './detailsgit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsgitPageRoutingModule
  ],
  declarations: [DetailsgitPage]
})
export class DetailsgitPageModule {}
