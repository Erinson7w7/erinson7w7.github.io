/* ==========================================
   LIRIOS DINAMICOS - CAPITULO AZUL
========================================== */

const contenedorLirios = document.getElementById("lirios-dinamicos");

if(contenedorLirios){

    function crearLirio(){

        const lirio = document.createElement("div");

        lirio.classList.add("lirio");

        // Simbolo del lirio
        lirio.textContent = "✿";

        // Tamaño aleatorio
        const tamaño = Math.random() * 30 + 25;

        // Posicion horizontal aleatoria
        const posicion = Math.random() * 100;

        // Duracion aleatoria
        const duracion = Math.random() * 12 + 15;

        lirio.style.left = posicion + "%";
        lirio.style.fontSize = tamaño + "px";
        lirio.style.animationDuration = duracion + "s";

        // Añadir el lirio a la pantalla
        contenedorLirios.appendChild(lirio);

        // Eliminarlo cuando termine su animacion
        setTimeout(function(){

            lirio.remove();

        }, duracion * 1000);

    }

    // Crear un lirio cada cierto tiempo

    setInterval(crearLirio, 2500);

}