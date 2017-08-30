import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { SeguridadService } from "app/seguridad/seguridad.service";
import { SeguridadGuard } from "app/seguridad/seguridad.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleoModule
  ],
  providers: [SeguridadService, SeguridadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
