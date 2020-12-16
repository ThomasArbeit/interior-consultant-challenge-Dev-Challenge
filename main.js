let navButton = document.getElementById('navButton');
let modaleMenu = document.getElementById("modaleMenu");
let barTop = document.getElementById('barTop');
let barMiddle = document.getElementById('barMiddle');
let barBottom = document.getElementById('barBottom');

navButton.addEventListener("click", function(e){

    console.log(modaleMenu.style.display);

    if (modaleMenu.style.display == "" || modaleMenu.style.display == "none"){
        modaleMenu.style.display = "flex";

        barTop.style.transform = "rotate(45deg) translateY(11px)";
        barBottom.style.transform = "rotate(-45deg) translateY(-11px)";
        barMiddle.style.display = "none";
    } else {
        modaleMenu.style.display = "none";

        barTop.style.transform = "rotate(0deg)";
        barBottom.style.transform = "rotate(0deg)";
        barMiddle.style.display = "block";
    }
    
})