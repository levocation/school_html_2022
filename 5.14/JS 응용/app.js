const player = {
    name: "전사",
    sayHi: function() {console.log("hello");}
}

const h1_list = document.querySelectorAll("h1");

console.log(h1_list[2]);

const title = document.querySelector(".h1-wrapper h1");
title.innerHTML = "야호";

const muyaho = document.querySelector("ul li a");
muyaho.innerHTML = "7교시";