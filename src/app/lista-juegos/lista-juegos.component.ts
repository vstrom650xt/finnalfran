import { Component } from '@angular/core';
import { JuegosService } from '../../app/pages/services/juegos.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent {
  juegos = [
    { id: 1, nombre: 'Catan', jugadores: '3-4', duracion: '1-2 horas', disponible: true },
    { id: 2, nombre: 'Ticket to Ride', jugadores: '2-5', duracion: '30-60 minutos', disponible: true },
    { id: 3, nombre: 'Scrabble', jugadores: '2-4', duracion: '30-90 minutos', disponible: false },
    // Agrega más juegos aquí según sea necesario
  ];
  constructor(public juegosService: JuegosService) { }

  reservarJuego(juegoId: number) {
    const juego = this.juegos.find(j => j.id === juegoId);
    if (juego) {
      juego.disponible = false;
    }
  }
}
