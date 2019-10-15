var wrapper = document.getElementById("wrapper");


function mostrarImagenUno(){
wrapper.style.marginLeft="0px";

}

function mostrarImagenDos(){
wrapper.style.marginLeft= "-640px";

}

function mostrarImagenTres(){
wrapper.style.marginLeft="-1280px";

}

var control = 0;
var mover = 0;
function desplazarIzquierda(){
    if (control > -2){
        control--;
        mover -= 640;
        wrapper.style.marginLeft = mover + "px";
    }
     
    if(document.getElementById("wrapper").style.marginLeft == "-1280px"){
      flechaD = document.getElementById(flechaDerecha);
      flechaD.style.display = none;
    }

}

function desplazarDerecha(){
    if (control < 0){
        control++;
        mover += 640;
        document.getElementById("wrapper").style.marginLeft = mover + "px";
    }

}