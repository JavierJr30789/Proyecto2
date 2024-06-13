import { Injectable } from '@angular/core';
//importamos Firestore y colecciones de la misma
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  //Definimos una coleccion de usuarios PRIVADA
  //Va a ser una coleccion de firestore
  //Respetara la estructura de datos de la interfaz Usuario
private usuariocollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {
    this.usuariocollection = this.database.collection<Usuario>('usuarios');
   }
}
