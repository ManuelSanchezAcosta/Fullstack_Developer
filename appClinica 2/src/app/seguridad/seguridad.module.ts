import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class SeguridadModule { }
