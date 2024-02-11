class Usuario {
    private _nombre: string = "";
    private _apellidos: string = "";
    private _correo: string = "";

    constructor(nombre: string, apellidos: string, correo: string) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._correo = correo;
    }

    get nombre(): string {
      return this._nombre;
    }

    set nombre(value: string) {
      this._nombre = value;
    }

    get apellidos(): string {
      return this._apellidos;
    }

    set apellidos(value: string) {
      this._apellidos = value;
    }

    get correo(): string {
      return this._correo;
    }

    set correo(value: string) {
      this._correo = value;
    }
  }
