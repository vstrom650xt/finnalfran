import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { FormularioReservaComponent } from './pages/formulario-reserva/formulario-reserva.component';
import {AuthService} from './pages/services/auth.service';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { JuegopageComponent } from './pages/juegopage/juegopage.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    JuegoComponent,    
    ListaJuegosComponent,
     FormularioReservaComponent,
     IniciosesionComponent,
     JuegopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule 
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
