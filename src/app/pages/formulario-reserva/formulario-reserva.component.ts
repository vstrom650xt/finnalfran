import { Component } from '@angular/core';
import { JuegosService } from '../services/juegos.service';


@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent {
  nombre: string = '';
  email: string = '';
  juegoSeleccionado: string = '';
  fecha: string = '';
  hora: string = '';

  constructor(public  juegosService: JuegosService) { }

  reservarJuego() {
    const reserva = {
      nombre: this.nombre,
      email: this.email,
      juego: this.juegoSeleccionado,
      fecha: this.fecha,
      hora: this.hora
    };

    this.juegosService.agregarReserva(reserva);

    // Limpiar el formulario después de guardar la reserva
    this.nombre = '';
    this.email = '';
    this.juegoSeleccionado = '';
    this.fecha = '';
    this.hora = '';
  }
  verReservas() {
    this.juegosService.mostrarReservas();
  }
}
