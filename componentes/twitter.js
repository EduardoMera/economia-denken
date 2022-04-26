window.addEventListener('DOMContentLoaded', () => {
  
  let ancho = window.screen.width;
  console.log("pase", ancho);

  if (ancho <= 576) {
    let seccion = document.getElementById('twitter');
    console.log(seccion);
    seccion.innerHTML = `
      <section class="container-fluid mt-5">
      <img class="img-noticias-twitter mb-3" src="../img/noticias-twitter-linea-amarilla.png" alt="" />
      <div class="mobile-titulo-noticias-twitter">NOTICIAS DE TWITTER</div>
      <div class="twit-mobile">
        <div class="row">
          <div class="col-2 logo-twitter">
            <img src="../img/iconos/web-redes-13.png" alt="" width="41" height="40">
          </div>
          <div class="col-10 twitter-content">
            <div class="perfil-twit">@EconomiaChubut</div>
            <div class="cuerpo-twit">
              Anuncian la pronta culminación del parque científico tecnológico agroforestal con una inversión de 180
              millones
              de pesos.
            </div>
          </div>
        </div>
      </div>
      <div class="twit-mobile">
        <div class="row">
          <div class="col-2 logo-twitter">
            <img src="../img/iconos/web-redes-13.png" alt="" width="41" height="40">
          </div>
          <div class="col-10 twitter-content">
            <div class="perfil-twit">@EconomiaChubut</div>
            <div class="cuerpo-twit">
              Se acordó una “Canasta Navideña” con los supermercados.
            </div>
          </div>
        </div>
      </div>
    </section>
      `;
  }
});
