enum Estado {
    Libre,
    Reservado,
    Cancelado
  }
  
class Juego extends Producto{
    
    private _estado: Estado;
   
  constructor(categoria: string, nombre: string, _estado: Estado) {
    super(categoria, nombre); 
    this._estado = _estado;
  }


  get estado(): Estado {
    return this._estado;
  }

  set estado(value: Estado) {
    this._estado = value;
  }

}