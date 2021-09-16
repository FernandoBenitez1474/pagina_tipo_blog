let nav = document.querySelector(".nav");
let btn_menu = document.getElementById("btn-menu").addEventListener("click",nav_on);

function nav_on(){
    nav.classList.toggle("nav_toggle");
}


// BTN- UP ==> Obtener el scroll del DOM (HTML) y almacenarlo en una variable para jugar con el
var div_btn_up = document.querySelector(".div-btn-up").addEventListener("click", scroll_top);


function scroll_top(){
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);

    if(scroll > 1689){
        window.scrollTo(0,0);
    }


}

window.onscroll = function(){


}

