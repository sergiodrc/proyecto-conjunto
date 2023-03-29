document.addEventListener('DOMContentLoaded', function() {
  let ubicacionPrincipal = window.pageYOffset;
  function toggleNavbar() {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
      document.querySelector('header').style.top = '0';
    } else {
      document.querySelector('header').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;
  }
  toggleNavbar();
  window.addEventListener('scroll', toggleNavbar);
});

function scrollToNextSection() {
  var nextSection = document.getElementById('section2');
  nextSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}