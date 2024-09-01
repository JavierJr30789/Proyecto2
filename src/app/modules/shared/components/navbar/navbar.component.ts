import { Component, inject, } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true; // variable booleana para el botón de Registro e Inicio de Sesión
  deslogueado = false; // variable booleana para el botón de Cerrar Sesión

  isDarkThemeActive = false;

  

 
  
  constructor(
   private document: Document,

    public servicioAuth: AuthService,
    public servicioRutas: Router,

  ){}

  
onChange(newValue: boolean): void{
  console.log(newValue);
  if(newValue) {
    this.document.body.classList.add('dark-mode');

  }
  else {
  this.document.body.classList.remove('dark-mode');
  }
}
  // Cambia los valores de logueado y deslogueado para ocultar los primeros y mostrar el último
  iniciar(){
    this.logueado = false;
    this.deslogueado = true;
  }

  cerrarSesion(){
    this.deslogueado = false;
    // va a eliminar el "token" actual del usuario
    // token: estado actual del usuario en el navegador para mantener la sesión abierta
    this.servicioAuth.cerrarSesion();

    this.servicioRutas.navigate(['/']); // redigirimos a la raíz de la página
    this.logueado = true;
  }

  
    }
