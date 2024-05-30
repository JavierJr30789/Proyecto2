import { Component } from '@angular/core';
import { Usuario} from 'src/app/models/usuario';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
hide=true

usuarios: Usuario= {
  uid:'',
  nombre:'',
  apellido:'',
  email:'',
  password:'',
  rol:'',
}

   //Crear una coleccion para usuarios
   coleccionUsuarios: Usuario[] = [];
   //Funcion para el registro
   iniciosesion(){
       const credenciales = {
           uid:this.usuarios.uid,
           nombre:this.usuarios.nombre,
           apellido:this.usuarios.apellido,
           email:this.usuarios.email,
           password:this.usuarios.password,
           rol:this.usuarios.rol
       }
//enviamos los nuevos registros por medio del metodo push a la coleccion
       this.coleccionUsuarios.push(credenciales);

       //por consola
       console.log(credenciales);
       console.log(this.coleccionUsuarios)
   }
}
