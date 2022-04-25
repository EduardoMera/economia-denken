window.addEventListener('DOMContentLoaded', (e)=>{
    let ancho=window.screen.width

    if(ancho<=576){
        let barraarriba=document.getElementById('barra-arriba')
        document.getElementById('barra-arriba-mobile').innerHTML=barraarriba.innerHTML
        barraarriba.remove()

        document.getElementById('contenedor-navbar').classList.remove('container-fluid')


        let buscador=document.querySelector('#buscador')
        document.getElementById('buscador-mobile').appendChild(buscador).
        buscador.remove()

    }
});