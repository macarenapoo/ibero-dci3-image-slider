var control = 0;
var margen = 0;
/*function dots() {
    if (control = 0) {
        // document.getElementsById("left").style.display = "none";
        document.getElementById("dot1").classList.add("active");
        document.getElementById("dot2").classList.remove("active");
        document.getElementById("dot3").classList.remove("active");
    }
    if (control = -1) {
        // document.getElementsById("left").style.display = "none";
        document.getElementById("dot1").classList.remove("active");
        document.getElementById("dot2").classList.add("active");
        document.getElementById("dot3").classList.remove("active");
    }
    if (control = -2) {
        // document.getElementsById("left").style.display = "none";
        document.getElementById("dot1").classList.remove("active");
        document.getElementById("dot2").classList.remove("active");
        document.getElementById("dot3").classList.add("active");
    }
}*/
function left() {
    if (control > -2) {
        margen -= 640;
        document.getElementById("slide-wrapper").style.marginLeft = margen + "px";
        control--;
    }

}
function right() {
    if (control < 0) {
        margen += 640;
        document.getElementById("slide-wrapper").style.marginLeft = margen + "px";
        control++;
    }
}
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

dots();