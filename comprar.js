

function mostrarFormularioCompra() {
  document.getElementById('formulario-compra').classList.remove('oculto');
}
function enviarCompra() {
  const nombre = document.getElementById('nombre-cliente').value.trim();
  const direccion = document.getElementById('direccion-cliente').value.trim();
  const horario = document.getElementById('horario-entrega').value;
  const telefono = document.getElementById('telefono-cliente').value.trim();
  const red = document.getElementById('red-envio').value;

  if (!nombre || !direccion || !horario) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  const resumenItems = Array.from(document.querySelectorAll('#resumen-carrito div'))
    .map(item => item.textContent)
    .join('\n');

  const mensaje = `
📦 Pedido nuevo:
👤 Nombre: ${nombre}
🏠 Dirección: ${direccion}
🕒 Horario de entrega: ${horario}
📞 Teléfono: ${telefono || 'No proporcionado'}
🛍️ Artículos:
${resumenItems}
`;

  const numeroDestino = '59892589236';
  let url;

  switch (red) {
    case 'whatsapp':
      url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;
      break;
    case 'telegram':
      url = `https://t.me/share/url?url=&text=${encodeURIComponent(mensaje)}`;
      break;
    case 'messenger':
      url = `https://www.facebook.com/messages/t/${numeroDestino}`; // Messenger no permite mensaje prellenado sin API
      alert('Messenger abrirá el chat, pero deberás pegar el mensaje manualmente.');
      break;
    default:
      alert('Red no soportada.');
      return;
  }

  const ventana = window.open(url, '_blank', 'width=1,height=1,left=-1000,top=-1000');

  setTimeout(() => {
    if (ventana) ventana.close();
    location.reload();
  }, 2000);
}



