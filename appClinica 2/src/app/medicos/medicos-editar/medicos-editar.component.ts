import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpmedicosService } from "app/medicos/httpmedicos.service";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-medicos-editar',
  templateUrl: './medicos-editar.component.html',
  styleUrls: ['./medicos-editar.component.css']
})
export class MedicosEditarComponent implements OnInit {
  @ViewChild("f") formulario: NgForm

  constructor(private httpMedicosService: HttpmedicosService, private router: Router) { }

  ngOnInit() {
  }

  agregar(){
    this.httpMedicosService.agregar(this.formulario.value)
    .subscribe(
      respuesta => {
        this.router.navigate(['medicos', 'listado'])
      }
    )
  }

}
