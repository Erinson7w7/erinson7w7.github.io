/* ==========================================
   LIRIOS AZULES DINAMICOS
   VERSION 2
========================================== */

const contenedorLirios =
    document.getElementById("lirios-dinamicos");


if(contenedorLirios){


    function crearLirio(){


        /* Crear la flor */

        const lirio =
            document.createElement("div");


        lirio.classList.add("lirio");


        /* ==================================
           CREAR PETALOS
        ================================== */


        for(let i = 0; i < 6; i++){


            const petalo =
                document.createElement("div");


            petalo.classList.add("petalo");


            lirio.appendChild(petalo);


        }


        /* ==================================
           CREAR CENTRO
        ================================== */


        const centro =
            document.createElement("div");


        centro.classList.add("lirio-centro");


        lirio.appendChild(centro);


        /* ==================================
           TAMAÑO ALEATORIO
        ================================== */


        const tamaño =
            Math.random() * 35 + 45;


        lirio.style.width =
            tamaño + "px";


        lirio.style.height =
            tamaño + "px";


        /* ==================================
           POSICION HORIZONTAL
        ================================== */


        const posicion =
            Math.random() * 100;


        lirio.style.left =
            posicion + "%";


        /* ==================================
           VELOCIDAD
        ================================== */


        const duracion =
            Math.random() * 12 + 15;


        lirio.style.animationDuration =
            duracion + "s";


        /* ==================================
           ROTACION ALEATORIA
        ================================== */


        const rotacion =
            Math.random() * 360;


        lirio.style.transform =
            "rotate(" + rotacion + "deg)";


        /* ==================================
           AÑADIR A LA PAGINA
        ================================== */


        contenedorLirios.appendChild(lirio);


        /* ==================================
           ELIMINAR CUANDO TERMINE
        ================================== */


        setTimeout(function(){


            lirio.remove();


        }, duracion * 1000);


    }


    /* ======================================
       CREAR LIRIOS CADA 2.5 SEGUNDOS
    ====================================== */


    setInterval(

        crearLirio,

        2500

    );


}

const botonLirios = document.getElementById("botonLirios");
const lirios = document.querySelector(".lirios");

if (botonLirios && lirios) {

    botonLirios.addEventListener("click", function(){

        lirios.classList.toggle("mostrar-lirios");

        if (lirios.classList.contains("mostrar-lirios")) {

            botonLirios.textContent = "✕";

        } else {

            botonLirios.textContent = "🍓";

        }

    });

}