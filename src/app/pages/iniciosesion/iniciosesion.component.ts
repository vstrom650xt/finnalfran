import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importa Router desde @angular/router

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

  constructor(public authService: AuthService,
    public router: Router // Inyecta Router en el constructor

    ) { }

  registrarUsuario() {

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.nombre || !this.correo || !this.password || !this.confirmPassword) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const usuario ={
      nombre: this.nombre,
      correo: this.correo,
      password: this.password       
    };

    this.authService.registrarUsuario(usuario);
    alert('Usuario registrado correctamente');
    this.router.navigate(['/']); // '/' es la ruta de la página de inicio
  }

  obtenerUsuariosRegistrados() {
    return this.authService.obtenerUsuariosRegistrados;
  }
}
