let personajeActual = null;
let combateActual = null;

document.getElementById('nuevaPartida').addEventListener('click', () => {
    mostrarPantalla('creador');
});

document.getElementById('continuarPartida').addEventListener('click', () => {
    const cargado = cargarPartida();
    if (cargado) {
        personajeActual = cargado;
        actualizarEstadoLobby();
        mostrarPantalla('lobby');
    } else {
        alert("No hay partida guardada.");
    }
});

document.getElementById('eliminarDatos').addEventListener('click', () => {
    localStorage.removeItem('partida');
    alert("Datos eliminados.");
});

document.getElementById('repositorio').addEventListener('click', () => {
    window.open('https://github.com/tuusuario/tu-proyecto', '_blank');
});

document.getElementById('formCreador').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    const imagenSeleccionada = document.getElementById('imagen').value;
    personajeActual = new Personaje(nombre);
    personajeActual.imagen = imagenSeleccionada;

    const armaBasica = new Arma("Bastón", 5, 0, "img/armas/baston.png");
    personajeActual.equiparArma(armaBasica);

    // Guardar la partida en localStorage
    guardarPartida(personajeActual);

    actualizarEstadoLobby();
    mostrarPantalla('lobby');
});

document.getElementById('volverInicioDesdeLobby').addEventListener('click', () => {
    mostrarPantalla('inicio');
});

document.getElementById('irTienda').addEventListener('click', () => {
    mostrarPantalla('tienda');
    tienda.mostrarProductos();
});

document.getElementById('irInventario').addEventListener('click', () => {
    mostrarPantalla('inventario');
    if (personajeActual && personajeActual.inventario) {
        personajeActual.inventario.mostrarInventario();
    }
});

document.getElementById('volverLobbyDesdeTienda').addEventListener('click', () => {
    mostrarPantalla('lobby');
});

document.getElementById('volverLobbyDesdeInventario').addEventListener('click', () => {
    mostrarPantalla('lobby');
});

document.getElementById('irCombate').addEventListener('click', () => {
    if (personajeActual) {
        iniciarCombate();
        mostrarPantalla('combate');
    } else {
        alert("No hay personaje creado.");
    }
});

document.getElementById('salirCombate').addEventListener('click', () => {
    guardarPartida(personajeActual);
    actualizarEstadoLobby();
    mostrarPantalla('lobby');
});

function actualizarEstadoLobby() {
    document.getElementById('estadoPersonaje').innerText =
        `Nombre: ${personajeActual.nombre}\nNivel: ${personajeActual.nivel}\nSalud: ${personajeActual.salud}\nDinero: ${personajeActual.dinero}\nArma Equipada: ${personajeActual.armaEquipada ? personajeActual.armaEquipada.nombre : "Ninguna"}`;
}

function iniciarCombate() {
    const nivelEnemigo = Math.floor(Math.random() * 3) + 1;
    const enemigo = new Enemigo("Enemigo", nivelEnemigo);
    combateActual = new Combate(personajeActual, enemigo);
    combateActual.iniciarCombate();
    actualizarEstadosCombate();
}

function actualizarEstadosCombate() {
    document.getElementById('estadoJugador').innerText =
        `${personajeActual.nombre} - Salud: ${personajeActual.salud}`;
    document.getElementById('estadoEnemigo').innerText =
        `${combateActual.enemigo.nombre} - Salud: ${combateActual.enemigo.salud}`;
}

function verificarFinCombate() {
    if (personajeActual.salud <= 0) {
        alert("Has sido derrotado. Fin del combate.");
        localStorage.removeItem('partida');
        mostrarPantalla('inicio');
    } else if (combateActual.enemigo.salud <= 0) {
        alert("¡Has derrotado al enemigo!");
        personajeActual.dinero += 50;
        personajeActual.experiencia += 20;
        if (personajeActual.experiencia >= 100) {
            personajeActual.subirNivel();
            personajeActual.experiencia = 0;
            alert("¡Subiste de nivel!");
        }
        guardarPartida(personajeActual);
        mostrarPantalla('lobby');
    }
}

document.getElementById('atacar').addEventListener('click', () => {
    if (combateActual && personajeActual) {
        combateActual.realizarTurno('atacar');
        actualizarEstadosCombate();
        verificarFinCombate();
    }
});

document.getElementById('defender').addEventListener('click', () => {
    if (combateActual && personajeActual) {
        combateActual.realizarTurno('defender');
        actualizarEstadosCombate();
        verificarFinCombate();
    }
});

document.getElementById('huir').addEventListener('click', () => {
    if (combateActual && personajeActual) {
        combateActual.realizarTurno('huir');
        actualizarEstadosCombate();
        mostrarPantalla('lobby');
    }
});
