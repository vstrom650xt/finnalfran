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

  constructor(private authService: AuthService, private juegoservice:JuegosService) { }

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuariosRegistrados();
    this.reservas = this.juegoservice.obtenerReservas().map(reserva => ({ ...reserva, nuevaHora: '' }));
  }

  cambiarHoraReserva(reserva: any) {
    reserva.hora = reserva.nuevaHora;
    this.juegoservice.actualizarReserva(reserva);
  }
  
  cancelarReserva(reserva: any) {
    reserva.estado = 'cancelado';
    this.juegoservice.actualizarReserva(reserva);
  }
}
