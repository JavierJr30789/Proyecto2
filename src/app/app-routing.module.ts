import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  //RUTA INICIAL / PRINCIPAL AL COMPONENTE
  {path:"inicio", component: InicioComponent},

  // CARGA PEREZOSA -> RUTA AL MODULO INICIO
  // loadChildren: indica que será ruta hija del módulo raíz
  // ()=>: Funcion flecha que importará la dirección del módulo
  // .then: Promesa que nos devolverá un valor resuelto o rechazado
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
