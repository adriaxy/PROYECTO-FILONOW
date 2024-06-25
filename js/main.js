const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const tienda = document.querySelector("#tienda");

abrir.addEventListener("click", () => {
    menu.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible")
})
