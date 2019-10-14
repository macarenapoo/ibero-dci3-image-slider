
function slide1() {
    document.getElementById("slide-wrapper").style.marginLeft = "0px";
    document.getElementById("dot1").classList.add("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.remove("active");
}
function slide2() {
    document.getElementById("slide-wrapper").style.marginLeft = "-640px";
    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.add("active");
    document.getElementById("dot3").classList.remove("active");
}

function slide3() {
    document.getElementById("slide-wrapper").style.marginLeft = "-1280px";
    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.add("active");
}
