import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.css']
})
export class JuguetesComponent {
  //coleccion de todos los productos

  coleccionJuguetes: Producto [] = []

coleccionProductos: Producto [] = []

//coleccion de solo productos de categoria "juguetes"
productosSeleccionado!: Producto;

modalVisible: boolean = false;

constructor(public servicioCrud: CrudService){
  this.servicioCrud.obtenerProducto().subscribe(producto =>{
    this.coleccionProductos = producto;
  })
  //mostrar la coleccion actual de juguetes
}
//funcion para filtrar los productos que sea del tipo "juguetes"
mostrarProductoJuguetes(){
  //forEach: itera la coleccion
this.coleccionProductos.forEach(producto => {
  //Si la categoria del producto es igual a "juguetes", se enviara a la
  //coleccion de juguetes especifica
  if(producto.categoria === "juguetes"){
    this.coleccionJuguetes.push(producto);
  }
})
}
//Muestra informacion completa de un producto elegido por el ususario
mostrarVer(info: Producto){

  //habilita la visibilidad del modal
  this.modalVisible = true;

  //guarda informacion de un producto elegido por el usuario
  this.productosSeleccionado = info;
}
}
