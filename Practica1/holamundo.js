/*JS del lado del servidor*/ 

console.log("Hola mundo! JS con Node")

/*Cálculo*/
let edad1 = 22
let edad2 = 29

console.log("Edad promedio: ")
console.log((edad1+edad2)/2)

/*Medir el tiempo del proceso */
console.time("miProceso")

for(let i = 0; i < 10000; i++){ }

console.timeEnd("miProceso")

/*Objetos tipo tabla */
let usuarios = [
    {nombre:"Pao", edad: 22},
    {nombre:"Dany", edad: 20},
];
console.table(usuarios)
