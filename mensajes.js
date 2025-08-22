const mensajes = document.querySelectorAll('.mensaje');
let index = 0;

function mostrarMensaje() {
  mensajes.forEach((msg, i) => msg.classList.remove('visible'));
  mensajes[index].classList.add('visible');
  index = (index + 1) % mensajes.length;
}

setInterval(mostrarMensaje, 4000); // cambia cada 4 segundos
mostrarMensaje(); // inicia
