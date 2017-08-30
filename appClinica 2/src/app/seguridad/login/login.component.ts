import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from "app/seguridad/seguridad.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("f") formulario: NgForm
  
  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(){

  }

  loguear(){
    this.seguridadService.login(this.formulario.value)
  }

}
