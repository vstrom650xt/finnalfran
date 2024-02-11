class ListaComida {
  listaDeComida: Comida[] = [];

  constructor() {
    this.rellenarLista();
  }

  private rellenarLista(): void {
    let comida1 = new Comida("picar", "nachos", 12);
    let comida2 = new Comida("picar", "bolitas de queso", 5);
    let comida3 = new Comida("burger", "cheese burger", 6);
    let comida4 = new Comida("burger", "bacon burger", 9);
    let comida5 = new Comida("perrito", "perrito completo", 8);
    let comida6 = new Comida("perrito", "perrito sin salsa", 7);

    this.listaDeComida.push(comida1);
    this.listaDeComida.push(comida2);
    this.listaDeComida.push(comida3);
    this.listaDeComida.push(comida4);
    this.listaDeComida.push(comida5);
    this.listaDeComida.push(comida6);
  }
}

const miListaDeComida = new ListaComida();
console.log(miListaDeComida.listaDeComida);
