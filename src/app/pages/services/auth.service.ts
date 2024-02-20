import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any = null;
  isLogged: boolean = false;
  constructor() { }

  registrarUsuario(usuario: any) {
    this.usuario = usuario; 

  }

  obtenerUsuariosRegistrados() {
    return this.usuario;
  }

  isLoggedIn(): boolean {
    return !!this.usuario; 
  }
  
  cerrarSesion(): void {
    this.usuario = '';
  }
}
