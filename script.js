var wrapper = document.getElementById("wrapper");
var slideWidth = document.getElementById("slider").offsetWidth;
var currentSlide = 0;
var slides = document.getElementsByClassName("slider-slide");

function nextSlide() {
   currentSlide++;
   updateWrapperPosition();
}

function prevSlide() {
    currentSlide--;
    updateWrapperPosition();
}

function goToSlide(slide) {
  currentSlide = slide;
  updateWrapperPosition();
}

function updateWrapperPosition() {
    wrapper.style.marginLeft = - (slideWidth * currentSlide) + "px";
    updateArrows();
    updateNav();
}

function updateArrows() {
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");
    if (currentSlide === 0) {
        leftArrow.style.visibility = "hidden";
    } else {
        leftArrow.style.visibility = "visible";
    }

    if (currentSlide === slides.length - 1) {
        rightArrow.style.visibility = "hidden";
    } else {
        rightArrow.style.visibility = "visible";
    }
}

function updateNav() {
    var navItems = document.getElementsByClassName("slider-nav-item");
    Array.from(navItems).forEach( function(item) {
        item.classList.remove("active");
    });
    navItems[currentSlide].classList.add("active");
}


 

updateArrows();