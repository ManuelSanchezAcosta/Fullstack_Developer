import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

const rutas: Routes = [
    {path: 'seguridad', loadChildren: './seguridad/seguridad.module#SeguridadModule'},
    {path: 'resumen', loadChildren: './resumen/resumen.module#ResumenModule'},
    {path: 'medicos', loadChildren: './medicos/medicos.module#MedicosModule'},
    {path: '**', redirectTo: 'seguridad/login', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}