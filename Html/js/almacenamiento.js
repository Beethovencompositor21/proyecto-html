function guardarPartida(personaje) {
  const datos = JSON.stringify(personaje);
  localStorage.setItem('partida', datos);
}

function cargarPartida() {
  const datos = localStorage.getItem('partida');
  if (datos) {
      const obj = JSON.parse(datos);
      let personaje = new Personaje(obj.nombre);
      Object.assign(personaje, obj);
      personaje.inventario = new Inventario();
      if (obj.inventario && obj.inventario.objetos) {
          personaje.inventario.objetos = obj.inventario.objetos;
      }
      return personaje;
  }
  return null;
}
