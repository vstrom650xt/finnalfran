import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import{FormularioReservaComponent } from './pages/formulario-reserva/formulario-reserva.component'
import { JuegoComponent } from './pages/juego/juego.component';
import{ IniciosesionComponent} from'./pages/iniciosesion/iniciosesion.component';
import { JuegopageComponent } from './pages/juegopage/juegopage.component';
import { UsuariopagComponent } from './pages/usuariopag/usuariopag.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "menu/:id",
    component: MenupageComponent
  },
  {
    path: "juegos",
    component: JuegoComponent
  },
  {
    path: "juego/:id",
    component: JuegopageComponent
  },
  {
    path: "formulario/:id",
    component: FormularioReservaComponent
  },
  {
    path: "iniciosesion",
    component: IniciosesionComponent
  },
  {
    path: "miperfil",
    component: UsuariopagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
