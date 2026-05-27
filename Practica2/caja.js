const { pedidos } = require('./datos')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let subtotal = 0
let iva = 0
let total = 0

function calcularTotales() {
    subtotal = 0

    for (let pedido of pedidos) {
        subtotal += pedido.total
    }

    iva = subtotal * 0.16
    total = subtotal + iva
}

function mostrarMenu() {

    console.log("1. Listar pedidos")
    console.log("2. Ver subtotal, IVA y total del pedido")
    console.log("3. Salir")

    readline.question("Seleccione una opción: ", opcion => {

        if (opcion === "1") {

            console.table(pedidos)
            mostrarMenu()

        } else if (opcion === "2") {
            calcularTotales()
            console.log("Subtotal: $" + subtotal)
            console.log("IVA: $" + iva)
            console.log("Total: $" + total)
            mostrarMenu()

        } else if (opcion === "3") {
            console.log("Hasta luego.")
            readline.close()
        } else {

            console.log("Opción no válida.")
            mostrarMenu()
        }
    })
}
mostrarMenu()