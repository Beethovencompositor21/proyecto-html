class Enemigo {
  constructor(nombre, nivel) {
      this.nombre = nombre;
      this.nivel = nivel;
      this.salud = 50 + (nivel * 10);
      this.ataque = 5 + (nivel * 2);
      this.defensa = 3 + nivel;
      this.imagen = 'img/enemigos/enemigo.png';
  }

  // Método para recibir daño
  recibirDaño(cantidad) {
      this.salud -= cantidad;
      if (this.salud < 0) this.salud = 0;
  }
}
