import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }


  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); 
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion(); // Llama al método cerrarSesion() del servicio AuthService
  }

}
