import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  // definimos la propiedad de coleccion local
  public user: Usuario[];
  //coleccion local con informacion
  constructor() {
    this.user = [
      {
        uid: '',
        nombre: 'Javier',
        apellido: 'Maldonado',
        email: 'javierjr30789@gmail.com',
        password: '96075355',
        rol: 'vist',
      }
    ]
  }
  //importamos la interfaz de usuario e inicializamos vacio
  users: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  }
  // Esta es la funcion para el inicio de sesion
  iniciarsesion() {
    // la variable credenciales reciben la informacion que se envia desde la web
    const credenciales = {
      nombre: this.users.nombre,
      apellido: this.users.apellido,
      email: this.users.email,
      password: this.users.password,
      rol: this.users.rol
    }
    // creamos una repetitiva para recorrer todos los datos del arreglo user
    for (let x = 0; x < this.user.length; x++) {
      // constante que guarde la informacion de la posicion actual de los objetos
      const datos = this.user[x]
      // y con esta condicional comparamos que los datos ingresados sean iguales a los que estan cargados al arreglo user
      if (datos.nombre === credenciales.nombre && datos.apellido === credenciales.apellido && datos.email === credenciales.email &&
        datos.password === credenciales.password && datos.rol === credenciales.rol) {
        alert("inicio de sesion valido")
        break;
      }
      else {
        alert("los datos ingresados son incorrectos")
        break;
      }
    }
  }

}

