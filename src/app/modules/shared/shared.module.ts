import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NadvarComponent } from './components/nadvar/nadvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NadvarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
