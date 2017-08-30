import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosListadoComponent } from './medicos-listado/medicos-listado.component';
import { MedicosEditarComponent } from './medicos-editar/medicos-editar.component';
import { HttpmedicosService } from "app/medicos/httpmedicos.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MedicosRoutingModule,
    HttpModule
  ],
  declarations: [MedicosListadoComponent, MedicosEditarComponent],
  providers: [HttpmedicosService]
})
export class MedicosModule { }
