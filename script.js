var wrapper = document.getElementById("wrapper");
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var i;
var flechaDerecha = document.getElementById("flechaDerecha");
var flechaIzquierda = document.getElementById("flechaIzquierda");


/*function mostrarImagenUno(){
wrapper.style.marginLeft="0px";
control = 0;
 boton1.classList.add("active");
 boton2.classList.remove("active");
 boton3.classList.remove("active");
}

function mostrarImagenDos(){
wrapper.style.marginLeft= "-640px";
control = -1;
boton1.classList.remove("active");
boton2.classList.add("active");
boton3.classList.remove("active");

}

function mostrarImagenTres(){
wrapper.style.marginLeft="-1280px";
  control = -2;
boton1.classList.remove("active");
boton2.classList.remove("active");
boton3.classList.add("active");
var flechaDerecha = document.getElementById("flechaDerecha");
flechaDerecha.classList.add("inactive");
}
*/



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
        /*mover -= 640;
        wrapper.style.marginLeft = mover + "px";*/
    }
    buenaImagen();
   
  
}

function desplazarDerecha(){
    if (control < 0){
        control++;
        /*mover += 640;
        document.getElementById("wrapper").style.marginLeft = mover + "px";*/
    }
    buenaImagen();

}

function buenaImagen(){
if(control == 0){
  clickBoton1();
  flechaIzquierda.classList.add("inactive");
  flechaDerecha.classList.remove("inactive");
} 

if(control==-1){
  clickBoton2();
  flechaIzquierda.classList.remove("inactive");
  flechaDerecha.classList.remove("inactive");
}

if(control==-2){
 clickBoton3();
 flechaIzquierda.classList.remove("inactive");
flechaDerecha.classList.add("inactive");

}
}

function clickBoton1(){
  wrapper.style.marginLeft="0px";
  control = 0;
   boton1.classList.add("active");
   boton2.classList.remove("active");
   boton3.classList.remove("active");
}

function clickBoton2(){
  wrapper.style.marginLeft= "-640px";
control = -1;
boton1.classList.remove("active");
boton2.classList.add("active");
boton3.classList.remove("active");
}

function clickBoton3(){
  wrapper.style.marginLeft="-1280px";
  control = -2;
boton1.classList.remove("active");
boton2.classList.remove("active");
boton3.classList.add("active");


}

