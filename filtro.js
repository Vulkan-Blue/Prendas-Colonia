function mostrarFiltros() {
  document.getElementById('panel-filtros').classList.remove('oculto');
}

function cerrarFiltros() {
  document.getElementById('panel-filtros').classList.add('oculto');
}

function filtrarPor(categoria) {
  const items = document.querySelectorAll('.catalogo .item');

  items.forEach(item => {
    if (categoria === 'todos') {
      item.style.display = 'block';
    } else {
      if (item.classList.contains(categoria)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });

  cerrarFiltros();
}
