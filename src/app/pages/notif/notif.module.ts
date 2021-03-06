import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NotifPageRoutingModule } from "./notif-routing.module";

import { NotifPage } from "./notif.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [NotifPage],
})
export class NotifPageModule {}
