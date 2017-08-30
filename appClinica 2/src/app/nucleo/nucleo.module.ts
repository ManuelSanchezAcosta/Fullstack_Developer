import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from "app/nucleo/cabecera/cabecera.component";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CabeceraComponent,
    AppRoutingModule
  ],
  declarations: [
    CabeceraComponent
  ]
})
export class NucleoModule { }
