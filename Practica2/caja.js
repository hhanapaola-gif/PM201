const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let pedidos = [
    { nombre: "Coca Cola", cantidad: 2, subtotal: 40 },
    { nombre: "Pepsi", cantidad: 1, subtotal: 18 },
    { nombre: "Fanta", cantidad: 3, subtotal: 66 }
]

let total = 0

function calcularTotal() {
    total = 0
    for (let pedido of pedidos) {
        total += pedido.subtotal
    }
}

function mostrarMenu() {
    console.log("\n1. Listar pedidos")
    console.log("2. Ver total acumulado")
    console.log("3. Salir")

    readline.question("Seleccione una opción: ", opcion => {
        if (opcion === "1") {
            console.table(pedidos)
            mostrarMenu()

        } else if (opcion === "2") {
            calcularTotal()
            console.log("Total acumulado: $" + total)
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