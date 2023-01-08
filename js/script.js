console.log("Siemka :)");

let body__buttonSpecial = document.querySelector(".body__buttonSpecial");
let header = document.querySelector(".header");
let body__button = document.querySelector(".body__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

body__button.addEventListener("click", () => {
    body.classList.toggle("body__dark");
    themeName.innerText = body.classList.contains("body__dark")
        ? "jasny"
        : "ciemny";
});
body__buttonSpecial.addEventListener("click", () => {
    header.remove();
});



