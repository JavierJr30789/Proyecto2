import { Component } from '@angular/core';

//IMPORTAMOS INTERFAZ
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO: ARRAY)
  public info: Juego[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Skyrim", 
        genero: "RPG",
        edad: 2011,
        imagen: "https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg",                                 
        alt: "Portada de Skyrim"
      },
      {
        id: "",
        nombre: "Valorant",
        genero: "Shooter",
        edad: 2020,
        imagen: "https://cdn.vox-cdn.com/thumbor/BndXHLu1pAvYObvUeaRZ9Ik_OFs=/0x0:920x613/1200x800/filters:focal(374x102:520x248)/cdn.vox-cdn.com/uploads/chorus_image/image/66719825/LogoVersion_Beta_Key_Art_VALORANT.0.0.jpg",
        alt: ""
      },
      {
        id: "",
        nombre: "Hollow Knight",
        genero: "Plataforma",
        edad: 2017,
        imagen: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
        alt: ""
      }
    ]
  }
}
