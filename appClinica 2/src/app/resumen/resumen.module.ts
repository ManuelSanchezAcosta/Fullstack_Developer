import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumenRoutingModule } from './resumen-routing.module';
import { DashboardComponent } from "app/resumen/dashboard/dashboard.component";


@NgModule({
  imports: [
    CommonModule,
    ResumenRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class ResumenModule { }
