alert(Tu cuenta ya quedo registada.)

window.setInterval (BlinkIt, 500);
var color = "red";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "red" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='36px';}
