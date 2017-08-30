import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { MedicosModelo } from "app/medicos/medicos-modelo";
import { SeguridadService } from "app/seguridad/seguridad.service";

@Injectable()
export class HttpmedicosService {
  medicos: MedicosModelo[] = []
  rutaBD: string
  
  constructor(private http: Http, private seguridadService: SeguridadService) { 
    this.rutaBD = this.seguridadService.obtenerURlBD()
  }

  listado(){
    const token = this.seguridadService.obtenerToken()

    this.http.get(this.rutaBD + "/medicos.json?auth=" + token)
      .subscribe(
        datos => {
          console.log(datos)
          this.medicos = datos.json()
        }
      )
  }

  agregar(medico: MedicosModelo){
    const token = this.seguridadService.obtenerToken()
    this.medicos.push(medico)
    console.log(this.medicos)
    //`{this.rutaBD}/medicos.json?auth={this.token}`, this.medicos
    return this.http
            .put(
              this.rutaBD + "/medicos.json?auth=" + token, this.medicos
              
            )
  }

}
