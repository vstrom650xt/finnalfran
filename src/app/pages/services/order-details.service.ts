import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails = [
    {
      id: 1,
      foodName: "Burger de queso",
      foodDetails: "¡Disfruta de la deliciosa Burger Suprema de Queso! Jugosa carne, pan fresco y una mezcla de quesos fundidos que te harán volver por más. ¡El sabor supremo que no querrás perderte!",
      foodPrice: 12,
      foodImg: "https://vstrom650xt.github.io/imagenesAngular/burger.jpg"
    },
    {
      id: 2,
      foodName: "Nachos Supreme",
      foodDetails: "¡Sumérgete en una explosión de sabores con nuestros Nachos Supreme! Crujientes totopos cubiertos con queso derretido, salsa picante, guacamole fresco y crema agria. ¡La combinación perfecta para compartir con amigos o disfrutar solo!",
      foodPrice: 8,
      foodImg: "https://vstrom650xt.github.io/imagenesAngular/nacho3.jpg"
    },
    {
      id: 3,
      foodName: "Tequeños",
      foodDetails: "¡Descubre el sabor irresistible de nuestros Tequeños Dorados! Deliciosos palitos de queso envueltos en masa crujiente y dorados a la perfección. ¡El aperitivo perfecto para cualquier ocasión, que te dejará queriendo más!",
      foodPrice: 6,
      foodImg: "https://vstrom650xt.github.io/imagenesAngular/360_F_337361026_iVGcJgrSAzIKDlGWZobzmkHL5xYOgtbF.jpg"
    },
    {
      id: 4,
      foodName: "Alitas de pollo",
      foodDetails: "¡Atrévete a volar con nuestras Alitas de Pollo! Jugosas y llenas de sabor, nuestras alitas están disponibles en una variedad de deliciosas salsas, desde la clásica BBQ hasta la picante Sriracha. ¡Una explosión de sabor en cada bocado que te dejará deseando más!",
      foodPrice: 6,
      foodImg: "https://vstrom650xt.github.io/imagenesAngular/fingers-de-pollo-4-815x458.jpg"
    },
    {
      id: 5,
      foodName: "Aros de cebolla",
      foodDetails: "¡Crujientes por fuera, tiernos por dentro! Nuestros Aros de Cebolla están recién cortados y rebozados en una mezcla de especias secretas, luego fritos a la perfección hasta obtener un dorado crujiente. ¡Un acompañamiento clásico que complementará cualquier comida!",
      foodPrice: 5,
      foodImg: "https://vstrom650xt.github.io/imagenesAngular/foto-heroe-1024x693.jpg"
    },
    {
      id: 6,
      foodName: "Hot dog",
      foodDetails: "¡Una experiencia culinaria en cada mordisco! Nuestro Hot Dog Gourmet está hecho con una salchicha premium, servida en un pan suave y tostado, y acompañada de una variedad de sabrosos condimentos y salsas. ¡Una explosión de sabor en cada bocado que te hará volver por más!",
      foodPrice: 4.5,
      foodImg: "https://vstrom650xt.github.io/imagenesAngular/hot.jpg"
    }
  ]
}
