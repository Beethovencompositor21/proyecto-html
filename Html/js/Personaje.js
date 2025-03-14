class Personaje {
  constructor(nombre) {
      this.nombre = nombre;
      this.nivel = 1;
      this.dinero = 100;
      this.experiencia = 0;
      this.salud = 100;
      this.ataque = 10;
      this.defensa = 5;
      this.velocidad = 7;
      this.inventario = new Inventario();
      this.armaEquipada = null;
      this.imagen = '';
  }

  // Método para equipar un arma
  equiparArma(arma) {
      if (this.armaEquipada) {
          this.inventario.agregarObjeto(this.armaEquipada);
      }
      this.armaEquipada = arma;
  }

  // Método para recibir daño
  recibirDaño(cantidad) {
      this.salud -= cantidad;
      if (this.salud < 0) this.salud = 0;
  }

  // Método para subir de nivel
  subirNivel() {
      this.nivel++;
      this.ataque += 2;
      this.defensa += 2;
      this.salud += 10;
  }
}
