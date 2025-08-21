let indiceActual = 0;



function moverIzquierda() {
  const catalogo = document.querySelector('.catalogo');
  const paginas = document.querySelectorAll('.item'); // o .pagina si usás esa clase
  const total = paginas.length;
const efecto = document.querySelector('.efecto-pagina-izquierda');
const efectopa = document.querySelector('.efecto-pagina-izquierda-pausado');
 if (indiceActual > 0) {
  indiceActual--;
  catalogo.style.transform = `translateX(-${indiceActual * 100}%)`;
  actualizarImagenActiva(indiceActual);

  if (efecto) {
    efecto.classList.add('efecto-activo-izquierda');
    setTimeout(() => {
      efecto.classList.remove('efecto-activo-izquierda');
    }, 600);
  }
}

}



function moverDerecha() {
  const catalogo = document.querySelector('.catalogo');
  const total = document.querySelectorAll('.item').length;
  const efecto = document.querySelector('.efecto-pagina');
  if (indiceActual < total - 1) {
  indiceActual++;
  catalogo.style.transform = `translateX(-${indiceActual * 100}%)`;
  actualizarImagenActiva(indiceActual);

  efecto.classList.add('efecto-activo');
  setTimeout(() => {
    efecto.classList.remove('efecto-activo');
  }, 600);
}

}

function actualizarImagenActiva(indice) {
  const imagenes = document.querySelectorAll('.catalogo .item');
  imagenes.forEach(img => img.classList.remove('imagen-activa'));
  if (imagenes[indice]) {
    imagenes[indice].classList.add('imagen-activa');
  }
}

