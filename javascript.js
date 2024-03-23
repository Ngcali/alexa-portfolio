document.getElementById("menuIcon").addEventListener("click", function(){
    var navbarElement = document.getElementById("myNavBar");
    if (navbarElement.className === "navbar") {
        navbarElement.className += " responsive";
    } else {
        navbarElement.className = "navbar";
    }
});

function myMode() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}