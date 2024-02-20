import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../services/juego.service';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
 juegoData: any;

  constructor(private service :JuegoService) { }

  ngOnInit(): void {
this.juegoData = this.service.juegoDetalle;

}

}
