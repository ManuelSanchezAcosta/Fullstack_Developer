import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguridadGuard } from "app/seguridad/seguridad.guard";
import { DashboardComponent } from "app/resumen/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [SeguridadGuard]},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenRoutingModule { }
