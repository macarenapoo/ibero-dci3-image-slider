var margin = 0;
var control = 0;
function sliderIzquierda(){
  if(control<0){
    control++;
      margin +=640;
      document.getElementById("wrapper").style.marginLeft = margin +"px";
      esconderFlechas();
  } 
}
function sliderDerecha(){
  if(control>-2){
    control--;
      margin -=640;
      document.getElementById("wrapper").style.marginLeft = margin +"px"; 
      esconderFlechas();
  }
}
function p1(){
    document.getElementById("wrapper").style.marginLeft="0px";
    document.getElementById("p1").classList.add("active");
    document.getElementById("p1").classList.add("inactive");
    document.getElementById("p1").classList.add("inactive");
}
function p2(){
    document.getElementById("wrapper").style.marginLeft="-640px";
    document.getElementById("p1").classList.add("inactive");
    document.getElementById("p1").classList.add("active");
    document.getElementById("p1").classList.add("inactive");
}
function p3(){
    document.getElementById("wrapper").style.marginLeft="-1280px";
    document.getElementById("p1").classList.add("inactive");
    document.getElementById("p1").classList.add("inactive");
    document.getElementById("p1").classList.add("active");
}
function esconderFlechas() {
  if (margin == 0) {
      document.getElementById("izquierda").style.visibility = "hidden";
  } else {
      document.getElementById("izquierda").style.visibility = "visible";
  }
  if (margin == -1280) {
      document.getElementById("derecha").style.visibility = "hidden";
  } else {
      document.getElementById("derecha").style.visibility = "visible";
  }
}
