
    var control = 0;
    var mover = 0;
     var wrap = document.getElementById("wrapper");

     function derecha(){
         if (control > -2){
             control--;
             
       uno();
         dos();
             
        }}
             
        function izquierda(){
      if (control < -2){
             control++;
             

    tres();
         
             
        }
    }
     
      function uno(){
           if (control == -1){
           
            wrap.style.marginLeft = "-640px";
            document.getElementById("p1").classList.remove("active");
            document.getElementById("p2").classList.add("active");
            document.getElementById("p3").classList.remove("active");
   
            document.getElementById("flechai").classList.remove("inactive");
   
            document.getElementById("flechad").classList.remove("inactive");
              
      }}
function dos(){
           if (control == -2){
              wrap.style.marginLeft = "-1280px";
              document.getElementById("flechad").classList.add("inactive");
             document.getElementById("flechai").classList.remove("inactive");
             document.getElementById("p1").classList.remove("active");
             document.getElementById("p3").classList.add("active");
             document.getElementById("p2").classList.remove("active");
             
            } 
      }
      function tres(){
        if (control == -1){
           
           wrap.style.marginRight = "640px";
           document.getElementById("p2").classList.remove("active");
           document.getElementById("p1").classList.add("active");
           document.getElementById("p3").classList.remove("active");
  
           document.getElementById("flechai").classList.add("inactive");
  
           document.getElementById("flechad").classList.remove("inactive");
              alert("hola");
           }}
      

    function p1(){
    document.getElementById("wrapper").style.marginLeft="0px";
    document.getElementById("p1").classList.add("active");
    document.getElementById("p2").classList.remove("active");
    document.getElementById("p3").classList.remove("active");
        desaparecerI();
       
}

function p2(){
    document.getElementById("wrapper").style.marginLeft="-640px";
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p2").classList.add("active");
    document.getElementById("p3").classList.remove("active");
   
     document.getElementById("flechai").classList.remove("inactive");
   
    document.getElementById("flechad").classList.remove("inactive");
   
}

function p3(){
    document.getElementById("wrapper").style.marginLeft="-1280px";
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p2").classList.remove("active");
    document.getElementById("p3").classList.add("active");
desaparecerD();
};

function desaparecerD(){
  document.getElementById("wrapper").style.marginLeft="-1280px";
    document.getElementById("flechad").classList.add("inactive");
   document.getElementById("flechai").classList.remove("inactive");
}

      function desaparecerI(){
  document.getElementById("wrapper").style.marginLeft="0px";
    document.getElementById("flechai").classList.add("inactive");
   document.getElementById("flechad").classList.remove("inactive");
       
     document.getElementById("flechad").style.marginLeft="590px";
         
}
   
