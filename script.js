/*var slideindex = 0;
showSlides(slideindex);

function plusSlides (n){
showSlides(slideindex += n);
}
function currentSlide(n){
showSlides(slideindex = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("slider-nav-item");
if (n > slides.length) {slideindex = 1}    
  if (n < 1) {slideindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideindex-1].style.display = "block";  
  dots[slideindex-1].className += "active";
}*/
var ctrl = 0;
var marg = 0;
var contenedor = document.getElementById("contenedor").style.marginLeft="0px";
function movizq(){
    if (ctrl < 0){
        marg += 640;
        document.getElementById("contenedor").style.marginLeft = marg + "px";
        ctrl++;
    }

}

function movDerecha(){
    if (ctrl > -2){
        ctrl--;
        marg -= 640;
        document.getElementById("contenedor").style.marginLeft = marg + "px";
       
    }
}
function bola1(){
  document.getElementById("contenedor").style.marginLeft =  "0px";
  document.getElementById("bola1").classList.add("active");
  document.getElementById("bola2").classList.remove("active");
  document.getElementById("bola3").classList.remove("active");
}
function bola2(){
  document.getElementById("contenedor").style.marginLeft =  "-640px";
  document.getElementById("bola2").classList.add("active");
  document.getElementById("bola1").classList.remove("active");
  document.getElementById("bola3").classList.remove("active");
}

function bola3(){
  document.getElementById("contenedor").style.marginLeft =  "-1280px";
  document.getElementById("bola3").classList.add("active");
  document.getElementById("bola2").classList.remove("active");
  document.getElementById("bola1").classList.remove("active");
}
/*function p1(){
  if(contenedor > ){
  document.getElementById("bola2").classList.add("active");
  }else{
    document.getElementById("bola2").classList.add("inactive");
  }
  }
/*function slidemov(){
  for (var i = 0; i<slider-nav-item.length; i++){
    slider-nav-item[i].classList.remove("slider mov");
    slider-nav-item[i].classList.add("slider-nav-item active");
  }
} 
function movernav(){
var bolita1 = document.getElementById("bolita1");

}*/