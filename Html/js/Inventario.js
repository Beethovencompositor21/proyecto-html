class Inventario {
  constructor() {
      this.objetos = [];
  }

  // Método para agregar un objeto al inventario
  agregarObjeto(objeto) {
      this.objetos.push(objeto);
      this.mostrarInventario();
  }

  // Método para mostrar el inventario
  mostrarInventario() {
      const inventarioDiv = document.getElementById('contenidoInventario');
      inventarioDiv.innerHTML = '';
      this.objetos.forEach((objeto, index) => {
          const item = document.createElement('div');
          item.innerText = `${objeto.nombre}`;

          if (objeto.ataque !== undefined && objeto.precio !== undefined) {
              const btnEquipar = document.createElement('button');
              btnEquipar.innerText = "Equipar";
              btnEquipar.onclick = () => {
                  personajeActual.equiparArma(objeto);
                  alert("Arma equipada: " + objeto.nombre);

                  this.objetos.splice(index, 1);
                  this.mostrarInventario();
              };
              item.appendChild(btnEquipar);
          }
          inventarioDiv.appendChild(item);
      });
  }
}
