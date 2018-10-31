var h = document.createElement("H2");                // Create a <h1> element
var t = document.createTextNode("Hello Coding Club");     // Create a text node
h.appendChild(t); 
var body = document.getElementById("bodyItem");
body.appendChild(h);
var bodyClasses = document.getElementsByClassName("body");
var bob = document.getElementById("pageTitle");
if(bob.style != "color: red"){
    bob.innerText = "Hello";
    bob.style = "color: red";
} else {
    bob.innerText = "Hello";
    bob.style = "color: purple";
}