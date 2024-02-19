import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuariosRegistrados: any[] = [];
  usuario: any = {}; // Asegúrate de que el objeto usuario se inicialice correctamente aquí
  constructor() { }

  registrarUsuario(usuario: any) {
    this.usuariosRegistrados.push(usuario);
    console.log('Usuario registrado:', usuario);
  }

  obtenerUsuariosRegistrados() {
    return this.usuariosRegistrados;
  }

  isLoggedIn(): boolean {
    return !!this.usuario; // Devuelve true si hay información de usuario, false si no la hay
  }
}
