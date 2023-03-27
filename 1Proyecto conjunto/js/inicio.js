let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
  let desplazamientoActual = window.pageYOffset;
  if (ubicacionPrincipal >= desplazamientoActual) {
    document.querySelector('header').style.top = '0';
  } else {
    document.querySelector('header').style.top = '-100px';
  }
  ubicacionPrincipal = desplazamientoActual;
}

function cambiarImagen() {
  var imagen = document.getElementById("imagen");
  imagen.src = "/1Proyecto conjunto/img/yamaha.png";
}