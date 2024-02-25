import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { JuegosService } from '../services/juegos.service';

@Component({
  selector: 'app-usuariopag',
  templateUrl: './usuariopag.component.html',
  styleUrls: ['./usuariopag.component.css']
})
export class UsuariopagComponent implements OnInit {
  usuario: any;
  reservas: any[] = [];
  nuevaHora: string = '';

  constructor(private authService: AuthService, private juegoservice:JuegosService) { }

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuariosRegistrados();
    this.reservas = this.juegoservice.obtenerReservas();
  }

  cambiarHoraReserva(idReserva: string, nuevaHora: string) {
    const reserva = this.reservas.find(reserva => reserva.id === idReserva);
    if (reserva) {
      reserva.hora = nuevaHora;
      this.juegoservice.actualizarReserva(reserva);
    }
  }

  cancelarReserva(idReserva: string) {
    const reserva = this.reservas.find(reserva => reserva.id === idReserva);
    if (reserva) {
      reserva.estado = 'cancelado';
      this.juegoservice.actualizarReserva(reserva);
    }
  }
}
