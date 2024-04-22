import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NadvarComponent } from './components/nadvar/nadvar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NadvarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
