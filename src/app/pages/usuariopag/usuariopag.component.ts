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
  nuevaHora: string = ''; // Definir la propiedad nuevaHora

  constructor(private authService: AuthService, private juegoservice:JuegosService) { }

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuariosRegistrados();
    this.reservas = this.juegoservice.obtenerReservas();
  }

  cambiarHoraReserva(idReserva: string, nuevaHora: string) {
    const reserva = this.reservas.find(reserva => reserva.id === idReserva);
    if (reserva) {
      reserva.hora = nuevaHora;
      // Llama al método en el servicio para actualizar la reserva
      this.juegoservice.actualizarReserva(reserva);
    }
  }
  

  cancelarReserva(idReserva: string) {
    // Encuentra el índice de la reserva en la lista de reservas
    const index = this.reservas.findIndex(reserva => reserva.id === idReserva);
    if (index !== -1) {
      // Elimina la reserva de la lista
      this.reservas.splice(index, 1);
      // Llama al método en el servicio para eliminar la reserva
      this.juegoservice.eliminarReserva(idReserva);
    }
  }
  
}
