/*
  Authors : dimarket
  Website : https://#/
  App Name : dimarket
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://#/license
  Copyright © 2020-present dimarket.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule { }
