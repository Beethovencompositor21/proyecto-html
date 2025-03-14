let imagenSeleccionada = null;


const sonidoClick = new Audio("Its Over 9000!!! [Original Video and Audio].mp3");

document.getElementById("img1").addEventListener("click", function () {
    elegirImagen("img1", "img2");
});

document.getElementById("img2").addEventListener("click", function () {
    elegirImagen("img2", "img1");
});

function elegirImagen(idSeleccionado, idOculto) {
    sonidoClick.play(); 
    imagenSeleccionada = idSeleccionado;

    let imagen = document.getElementById(idSeleccionado);
    let oculta = document.getElementById(idOculto);

    imagen.classList.add("seleccionada");
    oculta.classList.add("oculta");

    document.getElementById("contenedorBotones").style.display = "flex";
}

function cambiarVista(nuevaSrc) {
    if (imagenSeleccionada) {
        let img = document.getElementById(imagenSeleccionada);
        img.style.opacity = "0"; 
        setTimeout(() => {
            img.src = nuevaSrc;
            img.style.opacity = "1"; 
        }, 300);
    }
}

function restablecerEstado() {
    document.getElementById("img1").classList.remove("seleccionada", "oculta");
    document.getElementById("img2").classList.remove("seleccionada", "oculta");
    document.getElementById("contenedorBotones").style.display = "none";

   
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");

    img1.style.opacity = "0";
    img2.style.opacity = "0";

    setTimeout(() => {
        img1.src = "Imagenes/MajinBoo.jpg";
        img2.src = "Imagenes/Goku1.jpeg";
        img1.style.opacity = "1";
        img2.style.opacity = "1";
    }, 300);

    imagenSeleccionada = null;
}


const botonModoOscuro = document.createElement("button");
botonModoOscuro.textContent = "Modo Normal 🌙";
botonModoOscuro.style.position = "absolute";
botonModoOscuro.style.top = "20px";
botonModoOscuro.style.right = "20px";
botonModoOscuro.style.background = "#333";
botonModoOscuro.style.color = "white";
botonModoOscuro.style.border = "none";
botonModoOscuro.style.padding = "10px 15px";
botonModoOscuro.style.cursor = "pointer";

document.body.appendChild(botonModoOscuro);

botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
});


const estiloOscuro = document.createElement("style");
estiloOscuro.innerHTML = `
    .modo-oscuro {
        background: #222;
        color: white;
    }
    .modo-oscuro button {
        background: #444;
    }
`;
document.head.appendChild(estiloOscuro);