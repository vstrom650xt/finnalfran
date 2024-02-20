import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor() { }
  
  juegoDetalle = [
    {
      id: 1,
      juego: "UNO",
      juegoInfo: "UNO es un juego de cartas desarrollado en 1971 por Merle Robbins en Reading, Ohio, un suburbio de Cincinnati. Es propiedad de Mattel. El juego es adecuado para entre 2 y 10 jugadores.",
      juegoImg: "https://vstrom650xt.github.io/imagenesAngular/UNO_Logo.svg",
      categoria: "cartas",
      estado: "libre"
    },
    {
      id: 2,
      juego: "Listillo",
      juegoInfo: "Listillo es un juego de mesa de preguntas y respuestas en el que los jugadores deben responder correctamente para avanzar en el tablero y ganar puntos. Es ideal para poner a prueba tus conocimientos y competir con amigos y familiares.",
      juegoImg: "https://vstrom650xt.github.io/imagenesAngular/listillo-caja-render-min.webp",
      categoria: "educativo",
      estado: "libre"
    },    
    {
      id: 3,
      juego: "Parchís",
      juegoInfo: "El Parchís es un juego de mesa clásico que se juega con dados y fichas. El objetivo es mover todas tus fichas alrededor del tablero hasta llegar a casa sin ser capturado por las fichas de tus oponentes.",
      juegoImg: "https://vstrom650xt.github.io/imagenesAngular/parchis.svg",
      categoria: "tablero",
      estado: "libre"
    },
    {
      id: 4,
      juego: "Monopoly",
      juegoInfo: "El Monopoly es un juego de mesa de negociación y comercio en el que los jugadores compran, venden y negocian propiedades para construir su imperio inmobiliario. El objetivo es hacer que tus oponentes se queden sin dinero.",
      juegoImg: "https://vstrom650xt.github.io/imagenesAngular/monopoly512.logowik.com.webp",
      categoria: "tablero",
      estado: "libre"
    },
    {
      id: 5,
      juego: "Cluedo",
      juegoInfo: "El Cluedo es un juego de mesa de misterio en el que los jugadores intentan resolver quién cometió un asesinato, dónde ocurrió y con qué arma. Los jugadores recopilan pistas y hacen acusaciones para resolver el caso.",
      juegoImg: "https://vstrom650xt.github.io/imagenesAngular/cluedo.jpg",
      categoria: "tablero",
      estado: "libre"
    },
    {
      id: 6,
      juego: "Brass",
      juegoInfo: "El Brass es un juego de estrategia económica en el que los jugadores asumen el papel de empresarios durante la Revolución Industrial en Inglaterra. Construye fábricas, desarrolla redes de transporte y comercia para obtener ganancias y prestigio.",
      juegoImg: "https://vstrom650xt.github.io/imagenesAngular/brass.jpg",
      categoria: "estrategia",
      estado: "libre"
    }
  ];
}
