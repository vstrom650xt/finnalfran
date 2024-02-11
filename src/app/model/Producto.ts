
 abstract class Producto {
    private _categoria: string = "";
    private _nombre: string = "";
  
    constructor(categoria: string, nombre: string) {
      this._categoria = categoria;
      this._nombre = nombre;
    }
  
    get categoria(): string {
      return this._categoria;
    }
  
    set categoria(value: string) {
      this._categoria = value;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(value: string) {
      this._nombre = value;
    }

  }
  
