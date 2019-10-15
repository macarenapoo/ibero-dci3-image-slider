var wrapper = document.getElementById("wrapper");
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var i;

function mostrarImagenUno(){
wrapper.style.marginLeft="0px";
 boton1.classList.add("active");
 boton2.classList.remove("active");
 boton3.classList.remove("active");
}

function mostrarImagenDos(){
wrapper.style.marginLeft= "-640px";
boton1.classList.remove("active");
boton2.classList.add("active");
boton3.classList.remove("active");

}

function mostrarImagenTres(){
wrapper.style.marginLeft="-1280px";
  
boton1.classList.remove("active");
boton2.classList.remove("active");
boton3.classList.add("active");
var flechaDerecha = document.getElementById("flechaDerecha");
flechaDerecha.classList.add("inactive");
}




/*for (i = 0; i < boton.length; i++) {
  boton[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}*/


var control = 0;
var mover = 0;
function desplazarIzquierda(){
    if (control > -2){
        control--;
        mover -= 640;
        wrapper.style.marginLeft = mover + "px";
    }
     

     
  
}

function desplazarDerecha(){
    if (control < 0){
        control++;
        mover += 640;
        document.getElementById("wrapper").style.marginLeft = mover + "px";
    }

}