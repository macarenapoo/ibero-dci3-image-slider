var wrapper = document.getElementById("wrapper");
var slideWidth = document.getElementById("slider").offsetWidth;
var currentSlide = 0;

function nextSlide() {
   currentSlide++;
   updateWrapperPosition();
}

function prevSlide() {
    currentSlide--;
    updateWrapperPosition();
}

function updateWrapperPosition() {
    wrapper.style.marginLeft = - (slideWidth * currentSlide) + "px";
}