var currentSlide = 0;
var margen = 0;


function derecha() {

  if (currentSlide < 2){
document.getElementById('slider-slides-wrapper').style.marginLeft = -640 + "px";
currentSlide++;
puntoCurrent();
}
}

function izquierda() {
  
  if (currentSlide > 0){
document.getElementById('slider-slides-wrapper').style.marginLeft = 640 + "px";
   currentSlide--;
   puntoCurrent();
   
}
}

function puntoCurrent(){
  if (currentSlide==0){
    punto1();
   }
  if (currentSlide==1){
    punto2();
   }
   if (currentSlide==2){
    punto3();
   }
  }

  document.getElementById('flechaIzquierda').style.display='none';

function punto1() {
   document.getElementById('slider-slides-wrapper').style.marginLeft='0px';
   document.getElementById('puntoUno').classList.add("active");
    document.getElementById('puntoDos').classList.remove("active");
    document.getElementById('puntoTres').classList.remove("active");
    currentSlide=0;
    document.getElementById('flechaIzquierda').style.display='none';
    document.getElementById('flechaDerecha').style.display='block';
}

function punto2(){
 document.getElementById('slider-slides-wrapper').style.marginLeft='-640px';
    document.getElementById('puntoUno').classList.remove("active");
    document.getElementById('puntoDos').classList.add("active");
    document.getElementById('puntoTres').classList.remove("active");   
    currentSlide=1;
    document.getElementById('flechaIzquierda').style.display='block';
    document.getElementById('flechaDerecha').style.display='block';
}

function punto3(){
  document.getElementById('slider-slides-wrapper').style.marginLeft='-1280px'; 
    document.getElementById('puntoUno').classList.remove("active");
    document.getElementById('puntoDos').classList.remove("active");
    document.getElementById('puntoTres').classList.add("active");
    currentSlide=2;
    document.getElementById('flechaDerecha').style.display='none';
    document.getElementById('flechaIzquierda').style.display='block';
}




  
