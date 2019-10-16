var control = 0;
var mover = 0;

function botonIzquierda(){
    if (control < 0){
        control++;
        mover += 640;
        document.getElementById("slide").style.marginLeft = mover + "px";
    }

}

function botonDerecha(){
    
    if (control > -2){
        control--;
        mover -= 640;
        document.getElementById("slide").style.marginLeft = mover + "px";
       
    }
    
}

function puntitoUno(){
    document.getElementById("slide").style.marginLeft="0px";
    document.getElementById("puntito1").classList.add("active");
    document.getElementById("puntito2").classList.add("inactive");
    document.getElementById("puntito3").classList.add("inactive");
}

function puntitoDos(){
    document.getElementById("slide").style.marginLeft="-640px";
    document.getElementById("puntito2").classList.add("active");
    document.getElementById("puntito3").classList.add("inactive");
    document.getElementById("puntito1").classList.add("inactive");
}

function puntitoTres(){
    document.getElementById("slide").style.marginLeft="-1280px";
    document.getElementById("puntito3").classList.add("active");
    document.getElementById("puntito1").classList.add("inactive");
    document.getElementById("puntito2").classList.add("inactive");
}