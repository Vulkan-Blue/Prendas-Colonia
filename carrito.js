let nombreArticuloActual = '';

function mostrarSelector() {
  // Buscar la imagen activa dentro del catálogo
  const imagenActiva = document.querySelector('.catalogo .imagen-activa');
  if (!imagenActiva) {
    alert('No se encontró ninguna imagen activa');
    return;
  }

  const src = imagenActiva.getAttribute('src');
  const nombreArchivo = src.split('/').pop().split('.')[0];

  nombreArticuloActual = nombreArchivo
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  document.getElementById('panel-selector').classList.remove('oculto');
}

function agregarAlResumen() {
  const talla = document.getElementById('talla').value;
  const color = document.getElementById('color').value;
  const cantidad = document.getElementById('cantidad').value;

  const resumen = document.getElementById('resumen-carrito');
  const item = document.createElement('div');
  item.textContent = `${nombreArticuloActual} — Talla ${talla}, Color ${color}, Cantidad ${cantidad}`;
  resumen.appendChild(item);

  document.getElementById('panel-selector').classList.add('oculto');
}


function toggleCarrito() {
  const carrito = document.getElementById('resumen-carrito');
  carrito.classList.toggle('oculto');
}




function cerrarPanel() {
  document.getElementById('panel-selector').classList.add('oculto');
}
