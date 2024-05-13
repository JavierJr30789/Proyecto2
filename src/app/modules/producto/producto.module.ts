import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ModsworkshopComponent } from './pages/modsworkshop/modsworkshop.component';
import { SoporteComponent } from './pages/soporte/soporte.component';


@NgModule({
  declarations: [
    ProductoComponent,
    JuegosComponent,
    ModsworkshopComponent,
    SoporteComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
