class Comida extends Producto {
  private _precio: number  ;


  constructor(categoria: string, nombre: string, _precio:number) {
    super(categoria, nombre);
    this._precio = _precio;
  }


  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }



}
