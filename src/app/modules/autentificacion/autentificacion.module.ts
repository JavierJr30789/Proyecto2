import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ARCHIVO DE RUTAS DEL MÓDULO
import { AutentificacionRoutingModule } from './autentificacion-routing.module';

// VISTAS DEL MÓDULO AUTENTIFICACIÓN
import { RegistroComponent } from './page/registro/registro.component';
import { InicioSesionComponent } from './page/iniciosesion/iniciosesion.component';

// COMPONENTES DE MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

// COMPONENTES DE ANGULAR
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
    
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    // MATERIAL
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    // ANGULAR
    FormsModule,
  ],
  exports: [

RegistroComponent,
InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AutentificacionModule { }
