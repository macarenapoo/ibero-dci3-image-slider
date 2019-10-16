var margin = 0;
var control = 0;
function sliderDerecha(){
    if(margin<=0){
        margin +=640;
        document.getElementById("slider").style.marginleft = margin +"px";
        control++;
    }
    
}
function sliderIzquierda(){
    if(control>-2){
        margin -=640;
        document.getElementById("slider").style.marginleft = margin +"px";
        control--;
    }
}
function bolitasActivar(){
    
}
