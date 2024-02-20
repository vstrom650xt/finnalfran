import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  juegos = [ ];

  reservas: any[] = [];

  constructor() { }

  obtenerJuegos() {
    return this.juegos;
  }

  agregarReserva(reserva: any) {
    this.reservas.push(reserva);
  }

  obtenerReservas() {
    return this.reservas;
  }
  mostrarReservas() {
    console.log(this.reservas);
  }
}
