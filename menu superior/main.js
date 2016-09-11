

var menu = document.querySelector("#menu");
var button = document.querySelector(".toggle-menu");
button.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(menu.classList.contains("navigation-menu")){
        menu.classList.toggle("menu-visible");
    }
}