import { Component } from '@angular/core';
//IMPORTAMOS INTERFAZ
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO: ARRAY)
  public info: Juego[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Skyrim", 
        genero: "RPG",
        edad: 13,
        imagen: "https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg",                                 
        alt: "Portada de Skyrim"
      },
      {
        id: "",
        nombre: "Valorant",
        genero: "Shooter",
        edad: 4,
        imagen: "",
        alt: ""
      },
      {
        id: "",
        nombre: "Hollow Knight",
        genero: "Plataforma",
        edad: 7,
        imagen: "",
        alt: ""
      }
    ]
  }
}
