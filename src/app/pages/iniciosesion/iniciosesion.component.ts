import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  nombre: string = '';
  correo: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public authService: AuthService) { }

  usuario(){
      const usuario ={
        nombre: this.nombre,
        correo: this.correo,
        password: this.password       
   
      }

      this.authService.registrarUsuario(usuario);

  }

  registrarUsuario() {
    this.authService.registrarUsuario(this.usuario);
    alert('Usuario registrado exitosamente');
    // Puedes redirigir al usuario a otra página después del registro si es necesario
  }
}
