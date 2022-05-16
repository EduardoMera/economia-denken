let ancho = window.screen.width;

if (ancho <= 576) {
  const twits = document.querySelectorAll(".info-text");
  let seccion = document.getElementById("twitter");
  seccion.innerHTML = `
      <section class="container-fluid mt-5">
        <img class="img-noticias-twitter mb-3" src="./img/noticias-twitter-linea-amarilla.png" alt="" />
        <div class="mobile-titulo-noticias-twitter">NOTICIAS DE TWITTER</div>
      </section>
      `;
  twits.forEach((twit) => {
    seccion.innerHTML += `
      <div class="twit-mobile">
        <div class="row">
        <div class="col-2 logo-twitter">
          <img src="./img/iconos/web-redes-13.png" alt="" width="41" height="40">
        </div>
        <div class="col-10 twitter-content">
          <div class="perfil-twit">@EconomiaChubut</div>
          <div class="cuerpo-twit">
            ${twit.textContent}
          </div>
        </div>
      </div>
      </div>
      `;
  });
}
