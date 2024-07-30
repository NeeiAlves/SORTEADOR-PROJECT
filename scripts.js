const click = document.querySelector("button")
const win = document.querySelector("h1")

function genereteNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    win.innerHTML = result

}

click.addEventListener("click", genereteNumber)