class Tienda {
  constructor(productos = []) {
      this.inventarioTienda = productos;
  }

  // Método para mostrar los productos de la tienda
  mostrarProductos() {
      const productosDiv = document.getElementById('productosTienda');
      productosDiv.innerHTML = '';
      this.inventarioTienda.forEach((arma, index) => {
          const producto = document.createElement('div');
          producto.innerHTML = `
              <p>${arma.nombre} - Ataque: ${arma.ataque} - Precio: ${arma.precio}</p>
              <button onclick="comprarProducto(${index})">Comprar</button>
          `;
          productosDiv.appendChild(producto);
      });
  }

  // Método para comprar un arma
  comprar(arma, personaje) {
      if (personaje.dinero >= arma.precio) {
          personaje.dinero -= arma.precio;
          personaje.inventario.agregarObjeto(arma);
          return true;
      }
      return false;
  }
}

// Crear instancia de la tienda con algunos productos
const tienda = new Tienda([
  new Arma("Espada", 15, 50, "img/armas/espada.png"),
  new Arma("Hacha", 20, 70, "img/armas/hacha.png")
]);

// Función para manejar la compra de un producto
function comprarProducto(index) {
  const arma = tienda.inventarioTienda[index];
  if (tienda.comprar(arma, personajeActual)) {
      alert('Compra exitosa. Puedes equipar el arma desde el inventario.');
  } else {
      alert('No tienes suficiente dinero');
  }
}
