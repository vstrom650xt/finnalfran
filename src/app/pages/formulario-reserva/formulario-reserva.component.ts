import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../services/juegos.service';
import { ActivatedRoute } from '@angular/router';
import { JuegoService } from '../services/juego.service';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  juegoSeleccionado: string = '';
  fecha: string = '';
  horario: string = '';
  getJuegoId: any;
  juegoData: any;
  dropdownOpen = false;
  fechaMin: string = '';
  fechaMax: string = '';
  fechaError = false;
  hora: string = ''; 

  constructor(
    public juegosService: JuegosService,
    private param: ActivatedRoute,
    private service: JuegoService,
  ) {}

  ngOnInit(): void {
    this.getJuegoId = this.param.snapshot.paramMap.get('id');
    if (this.getJuegoId) {
      console.log(this.getJuegoId);
      this.juegoData = this.service.juegoDetalle.find((val) => val.id == this.getJuegoId);
      console.log(this.juegoData);
    }
    this.calcularFechasSemanaSiguiente();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  reservarJuego() {
    if (this.validarFecha()) {
      const reserva = {
        nombre: this.nombre,
        email: this.email,
        juego: this.juegoSeleccionado,
        fecha: this.fecha,
        horario: this.horario
      };

      this.juegosService.agregarReserva(reserva);

      // Limpiar el formulario después de guardar la reserva
      this.nombre = '';
      this.email = '';
      this.juegoSeleccionado = '';
      this.fecha = '';
      this.horario = '';
      this.fechaError = false;
    } else {
      this.fechaError = true;
    }
  }

  validarFecha(): boolean {
    const fechaSeleccionada = new Date(this.fecha);
    const hoy = new Date();
    const unaSemana = 7 * 24 * 60 * 60 * 1000;
    const fechaMin = new Date(hoy.getTime() + unaSemana);
    const fechaMax = new Date(hoy.getTime() + 2 * unaSemana);
    return fechaSeleccionada >= fechaMin && fechaSeleccionada <= fechaMax;
  }

  calcularFechasSemanaSiguiente() {
    const hoy = new Date();
    const unaSemana = 7 * 24 * 60 * 60 * 1000;
    const fechaMin = new Date(hoy.getTime() + unaSemana);
    const fechaMax = new Date(fechaMin.getTime() + unaSemana); // Ajuste aquí
    this.fechaMin = fechaMin.toISOString().split('T')[0];
    this.fechaMax = fechaMax.toISOString().split('T')[0];
  }
  
  
  resetearError() {
    this.fechaError = false;
  }
}
