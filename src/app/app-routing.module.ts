import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import{FormularioReservaComponent } from './pages/formulario-reserva/formulario-reserva.component'
import { JuegoComponent } from './pages/juego/juego.component';
import{ IniciosesionComponent} from'./pages/iniciosesion/iniciosesion.component';
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
    path: "formulario",
    component: FormularioReservaComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },

  {
    path: "iniciosesion",
    component: IniciosesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
