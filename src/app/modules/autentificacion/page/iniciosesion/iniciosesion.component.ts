import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  public user : Usuario[];
//creamos un arreglo donde definimos los datos que vaos a comparar
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
  users: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  }
  // Esta es la funcion que vamos a llamar cuando ingresemos los datos en la interfaz
  iniciarsesion() {
  // en esta variable es donde guardamos la informacion ingresada
    const credenciales = {    
      nombre: this.users.nombre,
      apellido: this.users.apellido,
      email: this.users.email,
      password: this.users.password,
      rol: this.users.rol
    }
// creamos una repetitiva para recorrer todos los datos del arreglo user
    for (let x = 0; x <= this.user.length; x++) {

      const datos = this.user[x]
      // y con esta condicional comparamos que los datos ingresados sean iguales a los que estan cargados al arreglo user
      if ( datos.nombre === credenciales.nombre && datos.apellido === credenciales.apellido && datos.email === credenciales.email && 
        datos.password === credenciales.password && datos.rol === credenciales.rol){
        alert("inicio de sesion correctamente")}
else{
  alert("los datos ingresados son incorrectos")
}
      }  
}

  }

