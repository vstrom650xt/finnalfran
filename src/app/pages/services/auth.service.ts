import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any = null;
  isLogged: boolean = false;
  constructor() { }

  registrarUsuario(usuario: any) {
    console.log('Usuario registrado:', usuario);
    this.usuario = usuario; // Una vez registrado, establece el usuario actual

  }

  obtenerUsuariosRegistrados() {
    return this.usuario;
  }

  isLoggedIn(): boolean {
    console.log(this.usuario)
    return !!this.usuario; // Devuelve true si hay un usuario registrado, false si no lo hay
  }
  
  cerrarSesion(): void {
    this.usuario = ''; // Llama al método cerrarSesion() del servicio AuthService
  }
}
