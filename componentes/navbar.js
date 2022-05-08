window.addEventListener('DOMContentLoaded', (e)=>{
    let ancho=window.screen.width

    if(ancho<=576){
        let barraarriba=document.getElementById('barra-arriba')
        document.getElementById('barra-arriba-mobile').innerHTML=barraarriba.innerHTML
        barraarriba.remove()

        document.getElementById('contenedor-navbar').classList.remove('container-fluid')

        let buscador=document.querySelector('#buscador')
        document.getElementById('buscador-mobile').appendChild(buscador);
        document.getElementById("buscador").remove();

        adaptarNavbar();
    }
});

function adaptarNavbar(){
    let haySubnivelesDisponibles = true;
    let nivel = 0;
    const navbar = []
    while(haySubnivelesDisponibles){
        const palabrasClave = [...document.querySelectorAll(`.level-${nivel}`).values()].map(item => item.textContent);
        console.log(palabrasClave);
        haySubnivelesDisponibles = false
    }
}