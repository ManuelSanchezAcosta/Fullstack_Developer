import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicosListadoComponent } from "app/medicos/medicos-listado/medicos-listado.component";
import { SeguridadGuard } from "app/seguridad/seguridad.guard";
import { MedicosEditarComponent } from "app/medicos/medicos-editar/medicos-editar.component";

const routes: Routes = [
  {path: '', component: MedicosListadoComponent, canActivate: [SeguridadGuard]},
  {path: 'nuevo', component: MedicosEditarComponent, canActivate: [SeguridadGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
