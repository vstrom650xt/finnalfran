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
  eliminarReserva(idReserva: string) {
    this.reservas = this.reservas.filter(reserva => reserva.id !== idReserva);
  }
  actualizarReserva(reservaActualizada: any) {
    const index = this.reservas.findIndex(reserva => reserva.id === reservaActualizada.id);
    if (index !== -1) {
      this.reservas[index] = reservaActualizada;
    }
  }
}
