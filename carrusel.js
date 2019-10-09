function derecha() {
    //document.getElementById('slider-slides-wrapper').style.marginLeft='-640px';
    //punto2();
    
      /*if (imagen2=="-640px"){
      punto3();
     } else{
      punto2();   
     }*/  
  var current_slide;    
  
  //marginLeft = current_slide * -640 + "px";
  document.getElementById('slider-slides-wrapper').style.marginLeft = current_slide * -640 + "px";
   
  }
  
  
  
  function izquierda() {
      //document.getElementById('slider-slides-wrapper').style.marginLeft='0px';
     //punto1();
  }
  
  document.getElementById('puntoUno').style.opacity='1';
  document.getElementById('puntoUno').style.transform='scale(1.2)';
  
  function punto1() {
      document.getElementById('slider-slides-wrapper').style.marginLeft='0px';
      document.getElementById('puntoUno').style.opacity='1';
      document.getElementById('puntoUno').style.transform='scale(1.2)';
      document.getElementById('puntoDos').style.opacity= '';
      document.getElementById('puntoDos').style.transform ='';
      document.getElementById('puntoTres').style.opacity= '';
      document.getElementById('puntoTres').style.transform ='';
  }
  function punto2(){
      document.getElementById('slider-slides-wrapper').style.marginLeft='-640px';
      document.getElementById('puntoDos').style.opacity= '1';
      document.getElementById('puntoDos').style.transform ='scale(1.2)';
      document.getElementById('puntoUno').style.opacity='';
      document.getElementById('puntoUno').style.transform='';
      document.getElementById('puntoTres').style.opacity= '';
      document.getElementById('puntoTres').style.transform ='';
      
  }
  function punto3(){
      document.getElementById('slider-slides-wrapper').style.marginLeft='-1280px'; 
      document.getElementById('puntoTres').style.opacity= '1';
      document.getElementById('puntoTres').style.transform ='scale(1.2)'; 
      document.getElementById('puntoUno').style.opacity='';
      document.getElementById('puntoUno').style.transform='';
      document.getElementById('puntoDos').style.opacity= '';
      document.getElementById('puntoDos').style.transform ='';
  }