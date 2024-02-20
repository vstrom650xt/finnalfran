import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuegoService } from '../services/juego.service';


@Component({
  selector: 'app-juegopage',
  templateUrl: './juegopage.component.html',
  styleUrl: './juegopage.component.css',

})
export class JuegopageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: JuegoService) { }

  getJuegoId: any;
  juegoData: any;


  ngOnInit(): void {
    this.getJuegoId = this.param.snapshot.paramMap.get('id')
    if(this.getJuegoId) {
      this.juegoData = this.service.juegoDetalle.filter((val) => {
        console.log(this.juegoData)
        return val.id == this.getJuegoId
      })
    }
  }

}
