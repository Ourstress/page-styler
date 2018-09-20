let html = document.querySelector("body")
let smaller = document.querySelector(".smaller")
let normal = document.querySelector(".normal")
let bigger = document.querySelector(".bigger")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")


smaller.addEventListener("click", function(){
    html.style.fontSize = "10px";
})  
normal.addEventListener("click", function(){
    html.style.fontSize = "25px";
})  
bigger.addEventListener("click", function(){
    html.style.fontSize = "50px";
}) 
red.addEventListener("click", function(){
    html.style.backgroundColor = "red";
}) 
blue.addEventListener("click", function(){
    html.style.backgroundColor = "blue";
}) 
green.addEventListener("click", function(){
    html.style.backgroundColor = "green";
}) 