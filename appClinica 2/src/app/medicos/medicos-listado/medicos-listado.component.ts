import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpmedicosService } from "app/medicos/httpmedicos.service";

@Component({
  selector: 'app-medicos-listado',
  templateUrl: './medicos-listado.component.html',
  styleUrls: ['./medicos-listado.component.css']
})
export class MedicosListadoComponent implements OnInit {

  

  constructor(private router: Router, private ruta:ActivatedRoute, private httpMedicosService: HttpmedicosService) { }

  ngOnInit() {
  }

  mostrarFormulario(){
    this.router.navigate(['medicos', 'nuevo'])
    //this.router.navigate(['nuevo'], {relativeTo: this.ruta})
  }

}
