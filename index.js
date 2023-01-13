const puntosDisplay = document.querySelector(".puntos-display");
const tablero = document.querySelector(".tablero");
let puntos = 0;
const anchura = 28;
const losCuadrados = []



const diseño = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 2, 2, 2, 2, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]
/* ***************** Los que va dentro del tablero
// los puntitos = 0
// el muro = 1
// habiatcion = 2
// super poder = 3 
***************** */

/* ************* Creando cada cuadrado en el tablero ******************+ */
function crearCuadraditos() {
    for (let i = 0; i < diseño.length; i++) {
        const elCuadradito = document.createElement("div")
        elCuadradito.classList.add("el-cuadradito")
        tablero.appendChild(elCuadradito);
        losCuadrados.push(elCuadradito)

        if (diseño[i] === 0) {
            losCuadrados[i].classList.add("los-puntitos")
        } else if (diseño[i] === 1) {
            losCuadrados[i].classList.add("el-muro")
        } else if (diseño[i] === 2) {
            losCuadrados[i].classList.add("habitacion")
        } else if (diseño[i] === 3) {
            losCuadrados[i].classList.add("super-poder")
        }

    }
console.log(losCuadrados)
}
crearCuadraditos()
/* ***************** Agregando Pac-Man *************** */
let pacmanUbicacion = 490
losCuadrados[pacmanUbicacion].classList.add("pac-man-arriba")
losCuadrados[pacmanUbicacion].classList.add("pac-man-abajo")
losCuadrados[pacmanUbicacion].classList.add("pac-man-izquierda")
losCuadrados[pacmanUbicacion].classList.add("pac-man-derecha")

/* ***************Funcion para hacer mover el pacman ************* */
function moverPacman(evento) {
    losCuadrados[pacmanUbicacion].classList.remove("pac-man-arriba", "pac-man-abajo", "pac-man-izquierda", "pac-man-derecha", "pac-man")

    switch (evento.key) {
        case "ArrowUp":
            if (
                !losCuadrados[pacmanUbicacion - anchura].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion - anchura].classList.contains("habitacion") &&
                pacmanUbicacion - anchura >= 0) {
                pacmanUbicacion -= anchura
            }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-arriba", "pac-man")
            break
        case "ArrowDown":
            if (
                !losCuadrados[pacmanUbicacion + anchura].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion + anchura].classList.contains("habitacion") &&
                pacmanUbicacion + anchura < anchura * anchura
            ) {
                pacmanUbicacion += anchura
            }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-abajo", "pac-man")
            break
        case "ArrowLeft":
            if (
                !losCuadrados[pacmanUbicacion - 1].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion - 1].classList.contains("habitacion") &&
                pacmanUbicacion % anchura !== 0) {
                pacmanUbicacion -= 1
            }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-izquierda", "pac-man")

            break
        case "ArrowRight":
            if (
                !losCuadrados[pacmanUbicacion + 1].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion + 1].classList.contains("habitacion") &&
                pacmanUbicacion % anchura !== anchura - 1) {
                pacmanUbicacion += 1
            }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-derecha", "pac-man")
            break

    }
    comerPuntitos()
    comerFruta()
    hasPerdido()
    hasGanado()

}
document.addEventListener("keydown", moverPacman)

function comerFruta() {
    if (losCuadrados[pacmanUbicacion].classList.contains("super-poder")) {
        losCuadrados[pacmanUbicacion].classList.remove("super-poder")
        puntos += 10
        losFantasmas.forEach(espiritu => espiritu.estarAsustado = true)
        setTimeout(noAsustar, 10000)
    }

}
function noAsustar() {
    losFantasmas.forEach(espiritu => espiritu.estarAsustado = false)
}

/* ****** funcion para que Pac-man coma los punticos ***** */

function comerPuntitos() {
    if (
        losCuadrados[pacmanUbicacion].classList.contains("los-puntitos")) {
        losCuadrados[pacmanUbicacion].classList.remove("los-puntitos")
        puntos++
        puntosDisplay.innerHTML = puntos
    }

}

/* ***** construyendo los fantamas que haran que Pac -man muera ***** */
class Fantasma {
    constructor(nombre, dondeEmpieza, velocidad) {
        this.nombre = nombre
        this.dondeEmpieza = dondeEmpieza
        this.velocidad = velocidad
        this.fantasmaUbicacion = dondeEmpieza
        this.estarAsustado = false
        this.timerId = NaN
    }
}

const losFantasmas = [
    new Fantasma("pinky", 376, 400),
    new Fantasma("blinky", 348, 250),
    new Fantasma("inky", 351, 300),
    new Fantasma("clyde", 379, 500)
]

losFantasmas.forEach(espiritu => {
    losCuadrados[espiritu.dondeEmpieza].classList.add(espiritu.nombre)
    losCuadrados[espiritu.dondeEmpieza].classList.add("clase-fantasma")
})
losFantasmas.forEach(espiritu => moverFantasma(espiritu))

function moverFantasma(espiritu) {
    const direcciones = [-1, +1, -anchura, +anchura]
    let laDireccion = direcciones[Math.floor(Math.random() * direcciones.length)]

    espiritu.timerId = setInterval(function () {
        if (
            !losCuadrados[espiritu.fantasmaUbicacion + laDireccion].classList.contains("el-muro") &&
            !losCuadrados[espiritu.fantasmaUbicacion + laDireccion].classList.contains("clase-fantasma")
        ) {
            losCuadrados[espiritu.fantasmaUbicacion].classList.remove(espiritu.nombre)
            losCuadrados[espiritu.fantasmaUbicacion].classList.remove("clase-fantasma", "espiritu-asustado")
            espiritu.fantasmaUbicacion += laDireccion
            losCuadrados[espiritu.fantasmaUbicacion].classList.add(espiritu.nombre)
            losCuadrados[espiritu.fantasmaUbicacion].classList.add("clase-fantasma")

        } else laDireccion = direcciones[Math.floor(Math.random() * direcciones.length)]

        if (espiritu.estarAsustado === true) {
            losCuadrados[espiritu.fantasmaUbicacion].classList.add("espiritu-asustado")
        }
        if (espiritu.estarAsustado && losCuadrados[espiritu.fantasmaUbicacion].classList.contains("pac-man")) {
            losCuadrados[espiritu.fantasmaUbicacion].classList.remove(espiritu.nombre, "clase-fantasma", "espiritu-asustado", "pac-man-arriba", "pac-man-abajo", "pac-man-izquierda", "pac-man-derecha")
            espiritu.fantasmaUbicacion = espiritu.dondeEmpieza
            puntos += 100
            losCuadrados[espiritu.fantasmaUbicacion].classList.add(espiritu.nombre, "clase-fantasma")
        }
        hasPerdido()
    }, espiritu.velocidad)
}

function hasPerdido() {
    if (
        losCuadrados[pacmanUbicacion].classList.contains("clase-fantasma") &&
        !losCuadrados[pacmanUbicacion].classList.contains("espiritu-asustado")) {
        losFantasmas.forEach(espiritu => clearInterval(espiritu.timerId))
        document.removeEventListener("keydown", moverPacman)
        puntosDisplay.innerHTML = "Has Perdido"

    }
}

function hasGanado() {
    if (puntos === 700) {
        losFantasmas.forEach(espiritu => clearInterval(espiritu.timerId))
        document.removeEventListener("keydown", moverPacman)
        puntosDisplay.innerHTML = "Has Ganado"

    }
}