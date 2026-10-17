
<script>
(() => {
  // Cada escrito tendrá su propia posición guardada
  const key = "teveo:lectura:" + location.pathname;

  let restaurando = true;
  let temporizador;

  // Recuperar la última posición al cargar el escrito
  window.addEventListener("load", () => {
    const posicion = Number(localStorage.getItem(key));

    if (posicion > 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, posicion);
          restaurando = false;
        });
      });
    } else {
      restaurando = false;
    }
  });

  // Guardar la posición mientras lees
  window.addEventListener("scroll", () => {
    if (restaurando) return;

    clearTimeout(temporizador);

    temporizador = setTimeout(() => {
      localStorage.setItem(key, window.scrollY);
    }, 150);
  }, { passive: true });

  // Guardar también al salir de la página
  window.addEventListener("pagehide", () => {
    if (!restaurando) {
      localStorage.setItem(key, window.scrollY);
    }
  });
})();
</script>
