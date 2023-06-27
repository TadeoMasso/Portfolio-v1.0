// 
let menuVisible = false
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true
    }
}

function seleccionar() {
    //ocultamos el menu al seleccionar
    document.getElementById("nav").classList = ""
    menuVisible = false
}
//Animacion en las barras de skills
function efectoHabilidades() {
    var skills = document.getElementById('habilidades')
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName('progreso')
        habilidades[0].classList.add('javascript')
        habilidades[1].classList.add('htmlcss')
        habilidades[2].classList.add('react')
        habilidades[3].classList.add('next')
        habilidades[4].classList.add('redux')
        habilidades[5].classList.add('comunicacion')
        habilidades[6].classList.add('trabajo')
        habilidades[7].classList.add('creatividad')
        habilidades[8].classList.add('dedicacion')
        habilidades[9].classList.add('respeto')
    }
}
//detectamos el scroll
window.onscroll = function () {
    efectoHabilidades()
}