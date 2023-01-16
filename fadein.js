window.onscroll = function () { funcionInOut() };

let cartel = document.getElementById("cartel_servicios");
let logos = document.getElementsByClassName("logo_titulos");
let titulos = document.getElementsByClassName("titulos");
let distancia_cartel, distancia_logos , distancia_titulos;

function funcionInOut() {
    distancia_cartel = window.innerHeight - cartel.getBoundingClientRect().top;
    if (distancia_cartel >= 200) {
        cartel.classList.add("efecto-inout");
    }
    if (distancia_cartel <= 60) {
        cartel.classList.remove("efecto-inout");
    }
    for (let i = 0; i < logos.length; i++){
        distancia_logos = window.innerHeight - logos[i].getBoundingClientRect().top;
        if (distancia_logos >= 200) {
            logos[i].classList.add("efecto");
        }
        if (distancia_logos <= 60) {
            logos[i].classList.remove("efecto");
        }
    }
    for (let i = 0; i < titulos.length; i++){
        distancia_titulos = window.innerHeight - titulos[i].getBoundingClientRect().top;
        if (distancia_titulos  >= 200) {
            titulos[i].classList.add("efecto-inout");
        }
        if (distancia_titulos  <= 60) {
            titulos[i].classList.remove("efecto-inout");
        }
    }

}

