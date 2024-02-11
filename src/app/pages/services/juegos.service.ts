import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  juegos = [
    { id: 1, nombre: 'Catan', jugadores: '3-4', duracion: '1-2 horas', disponible: true },
    { id: 2, nombre: 'Ticket to Ride', jugadores: '2-5', duracion: '30-60 minutos', disponible: true },
    { id: 3, nombre: 'Scrabble', jugadores: '2-4', duracion: '30-90 minutos', disponible: false },
    // Agrega más juegos aquí según sea necesario
  ];

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
