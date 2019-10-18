
   var control = 0;
   var mover = 0;
    var wrap = document.getElementById("wrapper");

    function derecha(){
        if (control > -2){
            control--;
            
      uno();
        dos();
            
       }}
            
       function der(){
         if (control > -2){
             control--;
             
       
         dos();
             
        }}

       function izquierda(){
     if (control < 0){
            control++;
            

   uno();
      tres();  
            
       }
   }

   function izq(){ 
     if (control < 0){
            control++;
            

   uno();}

   }

   function medio(){ 
     if (control = 0){
            control++;
            

   tres();}

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
            desaparecerD();
            
           }
     }
     
          function tres(){
           if (control == 0){
              
              wrap.style.marginLeft = "0px";
              document.getElementById("p1").classList.add("active");
              document.getElementById("p2").classList.remove("active");
              document.getElementById("p3").classList.remove("active");
              desaparecerI();
      
              }}

              

   function p1(){
     if(wrap.style.marginLeft = "0px"){
   document.getElementById("p1").classList.add("active");
   document.getElementById("p2").classList.remove("active");
   document.getElementById("p3").classList.remove("active");
      desaparecerI();
      izq();
      
     }
     
}

function p2(){
 if(wrap.style.marginLeft = "-640px"){
   document.getElementById("p1").classList.remove("active");
   document.getElementById("p2").classList.add("active");
   document.getElementById("p3").classList.remove("active");
  
    document.getElementById("flechai").classList.remove("inactive");
  
   document.getElementById("flechad").classList.remove("inactive");
   izq();
   medio();
   der();
   
 }
}

function p3(){
 if(wrap.style.marginLeft = "-1280px"){
   document.getElementById("p1").classList.remove("active");
   document.getElementById("p2").classList.remove("active");
   document.getElementById("p3").classList.add("active");
   desaparecerD();
   der();
   
 }
}

function desaparecerD(){
 if(wrap.style.marginLeft = "-1280px"){
 document.getElementById("wrapper").style.marginLeft="-1280px";
   document.getElementById("flechad").classList.add("inactive");
  document.getElementById("flechai").classList.remove("inactive");
}}

     function desaparecerI(){
      if(wrap.style.marginLeft = "0px"){
   document.getElementById("flechai").classList.add("inactive");
  document.getElementById("flechad").classList.remove("inactive");
      
    document.getElementById("flechad").style.marginLeft="590px";
        
}}



desaparecerD();
desaparecerI();
p1();