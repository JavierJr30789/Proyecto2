import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Definimos coleccion para los productos de la web del tipo producto
  private productoCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {   
    //referenciamos coleccion productos y sera subida como "producto" a Firebase
    this.productoCollection = database.collection('producto')
  }
  //CREAR productos (metodo)
  crear(producto: Producto){
    return new Promise(async (resolve, reject) => {
      try{
        //creamos un numero identificativo para el producto en la base de datos
const idProducto = this.database.createId();

//Asignamos ID creado al atributo id producto de a interfaz "Producto"
producto.idProducto = idProducto;

const resultado = await this.productoCollection.doc(idProducto).set(producto);

resolve(resultado);
      }catch (error){
        reject(error);
      }
    })
  }
  //OBTENER productos
  //EDITAR productos
  //ELIMINAR productos
}
