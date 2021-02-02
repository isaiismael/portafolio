(function () {
    let menu = document.getElementById("menu");
    let boton = document.getElementById("icono_menu");
    let contador = true;

    boton.addEventListener("click", mostrarMenu)
    function mostrarMenu() {
        if (contador) {
            menu.classList.add("menu__show")
            contador = !contador
        } else {
            menu.classList.remove("menu__show")
            contador = !contador
        }

    }


    /* MODO DARK*/
    let bodi = document.querySelector("body");
    let modo = document.getElementById("modo");
    modo.addEventListener("click", function () {
        let res = bodi.classList.toggle("dark")
        localStorage.setItem("modo", res)
    })

    let localStore = localStorage.getItem("modo")
    if (localStore === "true") {
        bodi.classList.add("dark")
    } else {
        bodi.classList.remove("dark")
    }
}())