import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES LOCALES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//este componente esta definido dentro del navbar porque la idea es que al switch aparezca en el navbar, sino lo importamos afuera
import { ThemeSwitcherComponent } from './components/navbar/theme-switcher/theme-switcher.component';

// COMPONENTES IMPORTADOS DE MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

// RUTAS GENERALES DE TODOS LOS MÓDULOS
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class SharedModule { }
