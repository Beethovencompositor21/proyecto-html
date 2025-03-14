function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => {
      p.style.display = 'none';
  });

  const pantalla = document.getElementById(id);
  if (pantalla) {
      pantalla.style.display = 'block';

      if (id === 'lobby' && typeof actualizarEstadoLobby === 'function') {
          actualizarEstadoLobby();
      }
  }
}

window.mostrarPantalla = mostrarPantalla;
