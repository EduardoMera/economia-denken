window.addEventListener('DOMContentLoaded', (e)=>{
    let ancho=window.screen.width

    if(ancho<=576){
        let barraarriba=document.getElementById('barra-arriba')
        document.getElementById('barra-arriba-mobile').innerHTML=barraarriba.innerHTML
        barraarriba.innerHTML=''

        document.getElementById('contenedor-navbar').classList.remove('container-fluid')
    }
});