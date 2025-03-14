class Combate {
  constructor(personaje, enemigo) {
      this.personaje = personaje;
      this.enemigo = enemigo;
  }

  // Método para iniciar el combate
  iniciarCombate() {
      console.log("Combate iniciado entre", this.personaje.nombre, "y", this.enemigo.nombre);
  }

  // Método para realizar un turno de combate
  realizarTurno(accion) {
      if (accion === 'atacar') {
          const factor = Math.random() * 0.5 + 0.75;
          const ataqueBase = this.personaje.ataque + (this.personaje.armaEquipada ? this.personaje.armaEquipada.ataque : 0);
          const dañoPersonaje = Math.max(0, (ataqueBase * factor) - (this.enemigo.defensa / 2));
          this.enemigo.recibirDaño(dañoPersonaje);

          // Contraataque
          const factorEnemigo = Math.random() * 0.5 + 0.75;
          const dañoEnemigo = Math.max(0, (this.enemigo.ataque * factorEnemigo) - (this.personaje.defensa / 2));
          this.personaje.recibirDaño(dañoEnemigo);

          console.log(`${this.personaje.nombre} ataca y causa ${dañoPersonaje.toFixed(2)} de daño.`);
          console.log(`${this.enemigo.nombre} contraataca y causa ${dañoEnemigo.toFixed(2)} de daño.`);
      } else if (accion === 'defender') {
          const factorEnemigo = Math.random() * 0.5 + 0.75;
          const dañoEnemigo = Math.max(0, (this.enemigo.ataque * factorEnemigo) - this.personaje.defensa);
          this.personaje.recibirDaño(dañoEnemigo);
          console.log(`${this.personaje.nombre} se defiende y recibe ${dañoEnemigo.toFixed(2)} de daño.`);
      } else if (accion === 'huir') {
          console.log(`${this.personaje.nombre} ha huido del combate.`);

          const penalizacion = 20;
          this.personaje.dinero = Math.max(0, this.personaje.dinero - penalizacion);
          alert(`Has huido y perdido ${penalizacion} monedas como penalización.`);
      }
  }
}
