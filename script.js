var control = 0;
var mover = 0;

function flechaIzquierda(){
    if (control < 0){
        control++;
        mover += 640;
        document.getElementById("slide").style.marginLeft = mover + "px";
        puntoActivo();
        flechaFanctasma();
    }

}

function flechaDerecha(){
    if (control > -2){
        control--;
        mover -= 640;
        document.getElementById("slide").style.marginLeft = mover + "px";
       puntoActivo();
        flechaFanctasma();
    }
    
}

function puntoUno(){
    mover = 0;
    control = 0;
    document.getElementById("slide").style.marginLeft=mover+"px";
    puntoActivo();
    flechaFanctasma();
}

function puntoDos(){
    mover = -640;
    control = -1;
    document.getElementById("slide").style.marginLeft=mover+"px";
    puntoActivo();
    flechaFanctasma();
}

function puntoTres(){
    mover = -1280;
    control = -2;
    document.getElementById("slide").style.marginLeft=mover+"px";
    flechaFanctasma();
}

    function puntoActivo(){
    if (control == 0){
        document.getElementById("punto1").classList.add("active");
    }else{
        document.getElementById("punto1").classList.remove("active");
    }
    if (control == -1){
        document.getElementById("punto2").classList.add("active");
    }else{
    document.getElementById("punto2").classList.remove("active");  
    }
    if (control == -2){
        document.getElementById("punto3").classList.add("active");
    }else{
        document.getElementById("punto3").classList.remove("active");
    }
    }
    function flechaFanctasma(){
        if(control==0){
            document.getElementById("flechaizquierda").style.visibility="hidden";
        }else{
            document.getElementById("flechaizquierda").style.visibility="visible";
        }
        if(control==-2){
            document.getElementById("flechaderecha").style.visibility="hidden";
        }else{
            document.getElementById("flechaderecha").style.visibility="visible";
        }
    }
puntoActivo();
flechaFanctasma();
