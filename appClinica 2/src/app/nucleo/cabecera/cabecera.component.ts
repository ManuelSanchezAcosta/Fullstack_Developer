import { Component, OnInit } from '@angular/core';
import { SeguridadService } from "app/seguridad/seguridad.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit() {
  }

}
