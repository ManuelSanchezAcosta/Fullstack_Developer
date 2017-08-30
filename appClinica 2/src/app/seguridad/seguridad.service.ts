import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class SeguridadService {

  //autenticado = false
  token: string 

  config = {
    apiKey: "AIzaSyAq-VIFNhici3XEG0OsQY3qOHY7XSGNOeE",
    authDomain: "historias-clinicas-dae01.firebaseapp.com",
    databaseURL: "https://historias-clinicas-dae01.firebaseio.com",
    projectId: "historias-clinicas-dae01",
    storageBucket: "historias-clinicas-dae01.appspot.com",
    messagingSenderId: "245874276799"
  }

  constructor(private router: Router) { 
    firebase.initializeApp(this.config);
  }

  login(datos: {correo: string, contrasena: string}){
    console.log(datos)

    firebase
      .auth()
      .signInWithEmailAndPassword(datos.correo, datos.contrasena)
      .then(
        respuesta => {
          firebase
            .auth()
            .currentUser
            .getToken()
            .then(
              (token:string) => {
                  this.token= token
                  this.router.navigate(['/resumen'])
              }
            )
        }
      )
    
    /*
    if(datos.correo == "cesar@mail.com" && datos.contrasena == "cesar"){
      console.log("Exito")
      this.autenticado = true
      this.router.navigate(['/resumen'])
    }*/
  }

  logout(){
    //this.autenticado = false
    this.token = null;
    firebase.auth().signOut()
    this.router.navigate(['seguridad', 'login'])
  }

  estaAutenticado(){
    //return this.autenticado
    return this.token == null ? false : true;
  }

  obtenerToken(){
    return this.token
  }

  obtenerURlBD(){
    return this.config.databaseURL
  }
}
