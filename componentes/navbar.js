const stateNavbarDesktop = {};

window.addEventListener("resize", ajustar);
window.addEventListener("DOMContentLoaded", () => {
  stateNavbarDesktop.nav = document.getElementById("nav").innerHTML;
  stateNavbarDesktop.barraDesktop = document.getElementById("barra-arriba").textContent;
  console.log(stateNavbarDesktop);
  ajustar();
  ocultarBarraAzulO();
});

function ocultarBarraAzulO() {}

function ajustar() {
  let ancho = document.body.clientWidth;

  if (ancho <= 1183) {
    console.log("mobile");
    const barraDesktop = document.getElementById("barra-arriba");
    const barraMobile = document.getElementById("barra-arriba-mobile");

    barraMobile.textContent = stateNavbarDesktop.barraDesktop;
    barraDesktop.textContent = "";

    document.getElementById("contenedor-navbar").classList.remove("container-fluid");

    let buscador = document.querySelector("#buscador");
    document.getElementById("buscador").remove();
    document.getElementById("buscador-mobile").appendChild(buscador);

    adaptarNavbar();

    if (document.querySelector(".background-img")) {
      document.querySelector(".background-img").style.display = "none";
    }
  } else {
    // agrear el html del state general del nav y probarlo
    document.getElementById("nav").innerHTML = stateNavbarDesktop.nav;
    document.getElementById("barra-arriba").innerHTML = stateNavbarDesktop.barraDesktop;
    document.getElementById("buscador-mobile").innerHTML = "";
    barra.innerHTML = "";
  }
}

/**
 * Arma la flecha izquierda en el item de offcanvas mobile
 * @param id Indica el nombre del menu al cual va a dirigirse luego
 * @param path Indica el path actual
 */
function armarFlechaVolver(id, path) {
  const colIzquierda = document.createElement("img");
  colIzquierda.classList.add("col-1");
  colIzquierda.id = `back-${id}`;
  if (path.find((e) => e == "componentes")) {
    colIzquierda.src = "../img/iconos/offcanvas-back.svg";
  } else {
    colIzquierda.src = "./img/iconos/offcanvas-back.svg";
  }
  return colIzquierda;
}
/**
 * Arma el item del centro del offcanvas mobile
 * @param texto Indica el texto que va a contener el item
 * @param redireccion Contiene el link a donde debe redirigir o el mismo texto del item en caso de ser un html o Falso si no redirige
 * @param path Indica el path actual
 */
function armarItemCentro(texto, redireccion, path) {
  const colCentro = document.createElement("div");
  colCentro.classList.add("col-10");
  colCentro.textContent = texto;
  colCentro.addEventListener("click", () => {
    if (redireccion == texto) {
      if (path.find((e) => e == "componentes")) {
        path[path.length - 1] = `${texto.toLowerCase().replaceAll(" ", "-")}.html`;
        window.location.pathname = path.join("/");
      } else {
        path[path.length - 1] = `componentes/${texto.toLowerCase().replaceAll(" ", "-")}.html`;
        window.location.pathname = path.join("/");
      }
    } else if (redireccion) {
      window.location.assign(redireccion);
    }
  });
  return colCentro;
}
/**
 * Arma la flecha derecha en el item de offcanvas mobile
 * @param id Indica el nombre del menu al cual va a dirigirse luego
 * @param path Indica el path actual
 */
function armarFlechaSiguiente(id, path) {
  const colDerecha = document.createElement("img");
  colDerecha.classList.add("col-1");
  colDerecha.id = `next-${id}`;
  if (path.find((e) => e == "componentes")) {
    colDerecha.src = "../img/iconos/offcanvas-next.svg";
  } else {
    colDerecha.src = "./img/iconos/offcanvas-next.svg";
  }
  return colDerecha;
}
/**
 * Arma el item para ser ubicado en el offcanvas mobile
 * @param anterior Funcion callback para la flecha anterior o Falso
 * @param texto Texto del item
 * @param siguiente Funcion callback para la flecha siguiente o Falso
 * @param redireccion Contiene el link a donde debe redirigir o el mismo texto del item en caso de ser un html o Falso si no redirige
 */
function armarItem(anterior, texto, siguiente, redireccion) {
  const offcanvasBody = document.getElementById("offcanvas-body");
  if (anterior && siguiente) {
    const id = texto.replaceAll(" ", "-").toLowerCase();
    const path = window.location.pathname.split("/");

    const item = document.createElement("div");
    item.classList.add("item-offcanvas", "row", "pt-3", "pb-3");

    const flechaVolver = armarFlechaVolver(id, path);

    const itemCentro = armarItemCentro(texto, redireccion, path);

    const flechaSiguiente = armarFlechaSiguiente(id, path);

    item.appendChild(flechaVolver);
    item.appendChild(itemCentro);
    item.appendChild(flechaSiguiente);
    offcanvasBody.appendChild(item);

    document.getElementById(`back-${id}`).addEventListener("click", () => {
      anterior();
    });
    document.getElementById(`next-${id}`).addEventListener("click", () => {
      siguiente();
    });
  } else if (anterior) {
    const id = texto.replaceAll(" ", "-").toLowerCase();
    const path = window.location.pathname.split("/");

    const item = document.createElement("div");
    item.classList.add("item-offcanvas", "row", "pt-3", "pb-3");

    const flechaVolver = armarFlechaVolver(id, path);

    const itemCentro = armarItemCentro(texto, redireccion, path);

    const flechaSiguiente = document.createElement("div");
    flechaSiguiente.classList.add("col-1");

    item.appendChild(flechaVolver);
    item.appendChild(itemCentro);
    item.appendChild(flechaSiguiente);
    offcanvasBody.appendChild(item);

    document.getElementById(`back-${id}`).addEventListener("click", () => {
      anterior();
    });
  } else if (siguiente) {
    const id = texto.replaceAll(" ", "-").toLowerCase();
    const path = window.location.pathname.split("/");

    const item = document.createElement("div");
    item.classList.add("item-offcanvas", "row", "pt-3", "pb-3");

    const flechaVolver = document.createElement("div");
    flechaVolver.classList.add("col-1");

    const itemCentro = armarItemCentro(texto, redireccion, path);

    const flechaSiguiente = armarFlechaSiguiente(id, path);

    item.appendChild(flechaVolver);
    item.appendChild(itemCentro);
    item.appendChild(flechaSiguiente);
    offcanvasBody.appendChild(item);

    document.getElementById(`next-${id}`).addEventListener("click", () => {
      siguiente();
    });
  } else {
    const path = window.location.pathname.split("/");

    const item = document.createElement("div");
    item.classList.add("item-offcanvas", "row", "pt-3", "pb-3");

    const flechaVolver = document.createElement("div");
    flechaVolver.classList.add("col-1");

    const itemCentro = armarItemCentro(texto, redireccion, path);

    const flechaSiguiente = document.createElement("div");
    flechaSiguiente.classList.add("col-1");

    item.appendChild(flechaVolver);
    item.appendChild(itemCentro);
    item.appendChild(flechaSiguiente);
    offcanvasBody.appendChild(item);
  }
}
function adaptarNavbar() {
  const offcanvasBody = document.getElementById("offcanvas-body");
  function menu() {
    offcanvasBody.innerHTML = "";
    armarItem(false, "INSTITUCIONAL", menuInstitucional, false);
    armarItem(false, "POLITICA Y GESTION", menuPoliticaYGestion, "POLITICA Y GESTION");
    armarItem(false, "HERRAMIENTAS Y TRAMITES", false, false);
    armarItem(false, "TESORERIA GENERAL DE LA PROVINCIA", false, false);
    armarItem(false, "DIRECCION GENERAL DE CATASTRO (DGC)", false, false);
    armarItem(false, "PAGO PROVEEDORES", false, false);
    armarItem(false, "SERVICIOS", false, false);
    armarItem(false, "CONTACTO", false, "CONTACTO");
  }
  function menuInstitucional() {
    offcanvasBody.innerHTML = "";
    armarItem(menu, "AUTORIDADES", false, "AUTORIDADES");
    armarItem(false, "ORGANISMO", menuOrganismo, false);
  }
  function menuOrganismo() {
    offcanvasBody.innerHTML = "";
    armarItem(menuInstitucional, "MISIONES Y FUNCIONES", false, "MISIONES Y FUNCIONES");
  }
  function menuPoliticaYGestion() {
    offcanvasBody.innerHTML = "";
    armarItem(menu, "GESTION PRESUPUESTARIA", menuPoliticaYGestionGestionPresupuestaria, "GESTION PRESUPUESTARIA");
    armarItem(false, "COORDINACION FINANCIERA", menuPoloticaYGestionCoordinacionFinanciera, "COORDINACION FINANCIERA");
    armarItem(false, "UNIDAD EJECUTORA PROVINCIAL (UEP)", menuPoliticaYGestionUEP, false);
    armarItem(false, "TRIBUTOS PROVINCIALES", false, false);
    armarItem(false, "GESTIÓN CATASTRO", menuPoliticaYGestionGestionCatastro, false);
    armarItem(false, "DIRECCION GENERAL DE RENTAS", false, false);
    armarItem(false, "CONSEJO PROVINCIAL DE RESPONSABILIDAD FISCAL", false, false);
    armarItem(false, "TESORERIA GENERAL", false, "TESORERIA GENERAL");
    armarItem(false, "SEGURO", false, false);
  }
  function menuPoloticaYGestionCoordinacionFinanciera() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestion, "FINANCIAMIENTO", false, false);
    armarItem(false, "ESTADISTICA Y CENSO", false, false);
    armarItem(false, "TÍTULOS DE DEUDA", false, false);
    armarItem(false, "LETRAS DEL TESORO", false, false);
    armarItem(false, "CLASIFICACIÓN DE RIESGO", false, false);
    armarItem(false, "REQUICITOS SOLICITUD AUT, ENDEUDAMIENTO MUNICIPIOS", false, false);
    armarItem(false, "LIBRE DE DEUDA FONDO FIDUCIARIO DESARROLLO", false, false);
    armarItem(false, "SOSTENIBILIDAD DE LA DEUDA", false, false);
  }
  function menuPoliticaYGestionUEP() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestion, "PROGRAMAS", false, false);
    armarItem(false, "ORGANISMOS", false, false);
    armarItem(false, "ENLACES", false, false);
  }
  function menuPoliticaYGestionGestionCatastro() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestion, "NORMAS CATASTRALES", false, false);
    armarItem(false, "GUIAS DE NOTAS", false, false);
    armarItem(false, "SISTEMA DE INFORMACION", false, false);
    armarItem(false, "ESTACION PERMANENTE DE GPS", false, false);
  }
  function menuPoliticaYGestionGestionPresupuestaria() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestion, "PRESUPUESTO Y FINANZAS", false, false);
    armarItem(false, "COMPUTOS", false, false);
    armarItem(false, "CONTROL Y GESTION ADM.", false, false);
    armarItem(false, "SISTEMA PRESUPUESTARIO", menusistemaPresupuestario, false);
    armarItem(false, "PRESUPUESTO", menuPresupuesto, false);
    armarItem(false, "EJECUCION PRESUPUESTARIA", menuEjecucionPresupuestaria, false);
    armarItem(false, "PROYECTO PLURIANUAL", false, false);
    armarItem(false, "RECURSOS", menuRecursos, false);
    armarItem(false, "CONSEJO DE RESPONSABILIDAD FISCAL", menuConsejoResponsabilidadFiscal, false);
  }
  function menuConsejoResponsabilidadFiscal() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "COMISIÓN EJECUTIVA", false, "COMISIÓN EJECUTIVA");
    armarItem(false, "CONFORMACIÓN DEL CONSEJO", false, "CONFORMACIÓN DEL CONSEJO");
  }
  function menuRecursos() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "RECAUDACION PROVINCIAL", false), false;
    armarItem(false, "DEUDA PUBLICA", false, false);
    armarItem(false, "TRANSFERENCIA A MUNICIPIOS", false, false);
  }
  function menuEjecucionPresupuestaria() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "INFORME DE GASTO Y EJECUCION", false, false);
    armarItem(false, "PROGRAMACION PLURIANUAL", false, false);
    armarItem(false, "CUENTA DE INVERSIÓN", false, false);
  }
  function menusistemaPresupuestario() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "INSTRUCTIVO", false, false);
    armarItem(false, "FORMULARIOS", false, false);
    armarItem(false, "CLASIFICADORES", false, false);
  }
  function menuPresupuesto() {
    offcanvasBody.innerHTML = "";
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "LEYES Y PROYECTO DE PRESUPUESTO", false, false);
    armarItem(false, "PROGRAMA PLURIANUAL", false, false);
    armarItem(false, "PRESENTACIÓN Y APROBACIÓN DEL PRESUPUESTO", false, false);
  }
  menu();
}
