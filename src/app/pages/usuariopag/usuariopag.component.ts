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
    this.reservas = this.juegoservice.obtenerReservas();
  }

  cambiarHoraReserva(idReserva: string, nuevaHora: string) {
    // Lógica para cambiar la hora de la reserva
  }

  cancelarReserva(idReserva: string) {
    // Lógica para cancelar la reserva
  }
}
