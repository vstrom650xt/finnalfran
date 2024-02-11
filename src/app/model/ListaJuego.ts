class ListaJuego {
  listaDeJuegos: Juego[] = [];


public  rellenarLista(){

    let juego1 = new Juego("cartas", `UNO`, Estado.Libre);
  let juego2 = new Juego("cartas", `Magic`, Estado.Libre);
  let juego3 = new Juego("rol", `Dungeons and Dragons`, Estado.Libre);
  let juego4 = new Juego("Categoría", `cluedo`, Estado.Libre);
  let juego5 = new Juego("Azar", `Poker`, Estado.Libre);

  this.listaDeJuegos.push(juego1);
  this.listaDeJuegos.push(juego2);
  this.listaDeJuegos.push(juego3);
  this.listaDeJuegos.push(juego4);
  this.listaDeJuegos.push(juego5);








}

}
