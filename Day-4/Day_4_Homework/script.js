const starFox = document.getElementById("starFox");
const peppyHare = document.getElementById("peppyHare");

starFox.onmouseover = function() {
    peppyHare.style.display = 'block';
}

 starFox.onmouseout = function() {
     peppyHare.style.display = 'none';
 }