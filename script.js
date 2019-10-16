var control = 0;
var mover = 0;

function flechaIzquierda(){
    if (control < 0){
        control++;
        mover += 640;
        document.getElementById("slide").style.marginLeft = mover + "px";
    }

}

function flechaDerecha(){
    
    if (control > -2){
        control--;
        mover -= 640;
        document.getElementById("slide").style.marginLeft = mover + "px";
       
    }
    
}

function puntoUno(){
    document.getElementById("slide").style.marginLeft="0px";
    document.getElementById("punto1").classList.add("active");
    document.getElementById("punto2").classList.add("inactive");
    document.getElementById("punto3").classList.add("inactive");
}

function puntoDos(){
    document.getElementById("slide").style.marginLeft="-640px";
    document.getElementById("punto2").classList.add("active");
    document.getElementById("punto3").classList.add("inactive");
    document.getElementById("punto1").classList.add("inactive");
}

function puntoTres(){
    document.getElementById("slide").style.marginLeft="-1280px";
    document.getElementById("punto3").classList.add("active");
    document.getElementById("punto1").classList.add("inactive");
    document.getElementById("punto2").classList.add("inactive");
}