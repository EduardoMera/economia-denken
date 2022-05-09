window.addEventListener('DOMContentLoaded', (e) => {
  let ancho = window.screen.width;

  if (ancho <= 576) {
    let barraarriba = document.getElementById('barra-arriba');
    document.getElementById('barra-arriba-mobile').innerHTML = barraarriba.innerHTML;
    barraarriba.remove();

    document.getElementById('contenedor-navbar').classList.remove('container-fluid');

    let buscador = document.querySelector('#buscador');
    document.getElementById('buscador').remove();
    document.getElementById('buscador-mobile').appendChild(buscador);

    adaptarNavbar();
  }
});

function armarItem(anterior, texto, siguiente) {
  const offcanvasBody = document.getElementById('offcanvas-body');
  if (anterior && siguiente) {
    const id = texto.replaceAll(' ', '-').toLowerCase();

    const item = document.createElement('div');
    item.classList.add('item-offcanvas', 'row', 'pt-3', "pb-3");
    
    const colIzquierda = document.createElement('img');
    colIzquierda.classList.add('col-1');
    colIzquierda.id = `back-${id}`;
    colIzquierda.src = '../img/iconos/offcanvas-back.svg';
    
    const colCentro = document.createElement('div');
    colCentro.classList.add('col-10');
    colCentro.textContent = texto;
    
    const colDerecha = document.createElement('img');
    colDerecha.classList.add('col-1');
    colDerecha.id = `next-${id}`;
    colDerecha.src = '../img/iconos/offcanvas-next.svg';

    item.appendChild(colIzquierda);
    item.appendChild(colCentro);
    item.appendChild(colDerecha);
    offcanvasBody.appendChild(item);

    document.getElementById(`back-${id}`).addEventListener('click', () => {
      anterior();
    });
    document.getElementById(`next-${id}`).addEventListener('click', () => {
      siguiente();
    });
  } else if (anterior) {
    const id = texto.replaceAll(' ', '-').toLowerCase();

    const item = document.createElement('div');
    item.classList.add('item-offcanvas', 'row', 'pt-3', "pb-3");
    
    const colIzquierda = document.createElement('img');
    colIzquierda.classList.add('col-1');
    colIzquierda.id = `back-${id}`;
    colIzquierda.src = '../img/iconos/offcanvas-back.svg';
    
    const colCentro = document.createElement('div');
    colCentro.classList.add('col-10');
    colCentro.textContent = texto;
    
    const colDerecha = document.createElement('div');
    colDerecha.classList.add('col-1');

    item.appendChild(colIzquierda);
    item.appendChild(colCentro);
    item.appendChild(colDerecha);
    offcanvasBody.appendChild(item);

    document.getElementById(`back-${id}`).addEventListener('click', () => {
      anterior();
    });
  } else if (siguiente) {
    const id = texto.replaceAll(' ', '-').toLowerCase();

    const item = document.createElement('div');
    item.classList.add('item-offcanvas', 'row', 'pt-3', "pb-3");

    const colIzquierda = document.createElement('div');
    colIzquierda.classList.add('col-1');

    const colCentro = document.createElement('div');
    colCentro.classList.add('col-10');
    colCentro.textContent = texto;

    const colDerecha = document.createElement('img');
    colDerecha.classList.add('col-1');
    colDerecha.id = `next-${id}`;
    colDerecha.src = '../img/iconos/offcanvas-next.svg';

    item.appendChild(colIzquierda);
    item.appendChild(colCentro);
    item.appendChild(colDerecha);
    offcanvasBody.appendChild(item);

    document.getElementById(`next-${id}`).addEventListener('click', () => {
      siguiente();
    });
  } else {
    const item = document.createElement('div');
    item.classList.add('item-offcanvas', 'row', 'pt-3', "pb-3");

    const colIzquierda = document.createElement('div');
    colIzquierda.classList.add('col-1');

    const colCentro = document.createElement('div');
    colCentro.classList.add('col-10');
    colCentro.textContent = texto;

    const colDerecha = document.createElement('div');
    colDerecha.classList.add('col-1');

    item.appendChild(colIzquierda);
    item.appendChild(colCentro);
    item.appendChild(colDerecha);
    offcanvasBody.appendChild(item);
  }
}
function adaptarNavbar() {
  const offcanvasBody = document.getElementById('offcanvas-body');
  function menu() {
    console.log('menu');
    offcanvasBody.innerHTML = '';
    armarItem(false, 'INSTITUCIONAL', menuInstitucional);
    armarItem(false, 'POLITICA Y GESTION', menuPoliticaYGestion);
    armarItem(false, "CONTACTO", false);
  }
  function menuInstitucional() {
    console.log('menuInstitucional');
    offcanvasBody.innerHTML = '';
    armarItem(menu, "AUTORIDADES", false);
    armarItem(false, "ORGANISMO", menuOrganismo);
  }
  function menuOrganismo() {
    console.log('menuInstitucional2');
    offcanvasBody.innerHTML = '';
    armarItem(menuInstitucional, "MISIONES Y FUNCIONES", false);
  }
  function menuPoliticaYGestion(){
    console.log('menuPoliticaYGestion');
    offcanvasBody.innerHTML = '';
    armarItem(menu, "GESTION PRESUPUESTARIA", menuPoliticaYGestionGestionPresupuestaria);
    armarItem(false, "COORDINACION FINANCIERA", menuPoloticaYGestionCoordinacionFinanciera);
    armarItem(false, "UNIDAD EJECUTORA PROVINCIAL (UEP)", menuPoliticaYGestionUEP);
    armarItem(false, "TRIBUTOS PROVINCIALES", ()=>{});
    armarItem(false, "GESTIÓN CATASTRO", menuPoliticaYGestionGestionCatastro);
    armarItem(false, "DIRECCION GENERAL DE RENTAS", ()=>{});
    armarItem(false, "CONSEJO PROVINCIAL DE RESPONSABILIDAD FISCAL", false);
    armarItem(false, "TESORERÍA", false);
    armarItem(false, "SEGURO", false);
    armarItem(false, "SEGURO", false);
  }
  function menuPoloticaYGestionCoordinacionFinanciera(){
    console.log('menuPoloticaYGestionCoordinacionFinanciera');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestion, "FINANCIAMIENTO", false);
    armarItem(false, "ESTADISTICA Y CENSO", false);
    armarItem(false, "TÍTULOS DE DEUDA", false);
    armarItem(false, "LETRAS DEL TESORO", false);
    armarItem(false, "CLASIFICACIÓN DE RIESGO", false);
    armarItem(false, "REQUICITOS SOLICITUD AUT, ENDEUDAMIENTO MUNICIPIOS", false);
    armarItem(false, "LIBRE DE DEUDA FONDO FIDUCIARIO DESARROLLO", false);
    armarItem(false, "SOSTENIBILIDAD DE LA DEUDA", false);
    armarItem(false, "SOSTENIBILIDAD DE LA DEUDA", false);
  }
  function menuPoliticaYGestionUEP(){
    console.log('menuPoliticaYGestionUEP');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestion, "PROGRAMAS", ()=>{});
    armarItem(false, "ORGANISMOS", false);
    armarItem(false, "ENLACES", false);
  }
  function menuPoliticaYGestionGestionCatastro(){
    console.log('menuPoliticaYGestionGestionCatastro');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestion, "NORMAS CATASTRALES", false);
    armarItem(false, "GUIAS DE NOTAS", false);
    armarItem(false, "SISTEMA DE INFORMACION", false);
    armarItem(false, "ESTACION PERMANENTE DE GPS", false);
  }
  function menuPoliticaYGestionGestionPresupuestaria(){
    console.log('menuPoliticaYGestionGestionPresupuestaria');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestion, "PRESUPUESTO Y FINANZAS", false);
    armarItem(false, "COMPUTOS", false);
    armarItem(false, "CONTROL Y GESTION ADM.", false);
    armarItem(false, "SISTEMA PRESUPUESTARIO", menusistemaPresupuestario);
    armarItem(false, "PRESUPUESTO", menuPresupuesto);
    armarItem(false, "EJECUCION PRESUPUESTARIA", menuEjecucionPresupuestaria);
    armarItem(false, "PROYECTO PLURIANUAL", false);
    armarItem(false, "RECURSOS", menuRecursos);
    armarItem(false, "CONSEJO DE RESPONSABILIDAD FISCAL", menuConsejoResponsabilidadFiscal);
    armarItem(false, "CONSEJO DE RESPONSABILIDAD FISCAL", ()=>{});
  }
  function menuConsejoResponsabilidadFiscal(){
    console.log('menuConsejoResponsabilidadFiscal');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "COMISIÓN EJECUTIVA", false);
    armarItem(false, "CONFORMACIÓN DEL CONSEJO", false);
  }
  function menuRecursos(){
    console.log('menuRecursos');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "RECAUDACION PROVINCIAL", false);
    armarItem(false, "DEUDA PUBLICA", false);
    armarItem(false, "TRANSFERENCIA A MUNICIPIOS", false);
  }
  function menuEjecucionPresupuestaria(){
    console.log('menuEjecucionPresupuestaria');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "INFORME DE GASTO Y EJECUCION", false);
    armarItem(false, "PROGRAMACION PLURIANUAL", false);
    armarItem(false, "CUENTA DE INVERSIÓN", false);
  }
  function menusistemaPresupuestario(){
    console.log('menusistemaPresupuestario');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "INSTRUCTIVO", false);
    armarItem(false, "FORMULARIOS", false);
    armarItem(false, "CLASIFICADORES", false);
  }
  function menuPresupuesto(){
    console.log('menuPresupuesto');
    offcanvasBody.innerHTML = '';
    armarItem(menuPoliticaYGestionGestionPresupuestaria, "LEYES Y PROYECTO DE PRESUPUESTO", false);
    armarItem(false, "PROGRAMA PLURIANUAL", false);
    armarItem(false, "PRESENTACIÓN Y APROBACIÓN DEL PRESUPUESTO", false);
  }
  menu();
}
