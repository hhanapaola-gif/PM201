const { pedidos, readline } = require('./datos')
const mostrarMenuCocina = require('./cocina')
const mostrarMenuCliente = require('./cliente')

let subtotal = 0
let iva = 0
let total = 0

function calcularTotales() {
    subtotal = 0

    for (let pedido of pedidos) {
        if (pedido.total) {
            subtotal += pedido.total
        }
    }

    iva = subtotal * 0.16
    total = subtotal + iva
}

function mostrarMenuPedidos(volver) {
    console.log("--- Menú caja ---")
    console.log("1. Listar pedidos")
    console.log("2. Ver subtotal, IVA y total")
    console.log("3. Verificar estatus del pedido")
    console.log("4. Volver al menú principal")

    readline.question("Seleccione una opción: ", opcion => {

        if (opcion === "1") {

            console.table(pedidos)
            mostrarMenuPedidos(volver)

        } else if (opcion === "2") {
            calcularTotales()

            console.log("Subtotal: $" + subtotal)
            console.log("IVA: $" + iva)
            console.log("Total: $" + total)

            mostrarMenuPedidos(volver)

        } else if (opcion === "3") {
            estatusPedido(obtenerStatus)

        } else if (opcion === "4") {
            volver()

        } else {
            console.log("Opción no válida.")
            mostrarMenuPedidos(volver)
        }
    })
}

function mostrarMenuPrincipal() {

    console.log("---- Menú principal ----")
    console.log("1. Menú cliente")
    console.log("2. Menú cocina")
    console.log("3. Menú caja")
    console.log("4. Salir")

    readline.question("Seleccione una opción: ", opcion => {

        if (opcion === "1") {
            mostrarMenuCliente(mostrarMenuPrincipal)

        } else if (opcion === "2") {
            mostrarMenuCocina(mostrarMenuPrincipal)

        } else if (opcion === "3") {
            mostrarMenuPedidos(mostrarMenuPrincipal)

        } else if (opcion === "4") {
            console.log("Hasta luego.")
            readline.close()

        } else {
            console.log("Opción no válida.")
            mostrarMenuPrincipal()
        }
    })
}


function estatusPedido(callback) {
    console.log("Verificando pedido...")
    setTimeout(function () {

        let aceptado = Math.random() > 0.3

        if (aceptado) {
            callback("Pedido listo")

        } else {
            callback("Pedido cancelado")
        }
    }, 5000)
}

function obtenerStatus(resultado) {
    console.log("Estatus del pedido: " + resultado)
    mostrarMenuPedidos(mostrarMenuPrincipal)
}
mostrarMenuPrincipal()