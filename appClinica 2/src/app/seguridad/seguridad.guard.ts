import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SeguridadService } from "app/seguridad/seguridad.service";

@Injectable()
export class SeguridadGuard implements CanActivate {

  constructor(private seguridadService: SeguridadService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.seguridadService.estaAutenticado();
  }
}
