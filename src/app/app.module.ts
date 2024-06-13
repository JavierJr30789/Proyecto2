import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

//Importaciones de Firebase
import { enviroment } from 'src/enviroments/enviroment';
import {AngularFireModule} from '@angular/fire/compat'; // esta importacion es para el cloud firestore
import {AngularFireAuthModule} from  '@angular/fire/compat/auth'; //es para la autentificacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage' // es para la BD de los archivos e imagenes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
