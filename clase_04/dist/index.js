"use strict";
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(5, 8));
// const objeto = {
//     nombre: "Juan",
//     saludar: () =>{
//         console.log(`Hola! soy ${this.nombre}` );
//     }
// }
// objeto.saludar();
function obtenerPrimerElemento(array) {
    return array[0];
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nombres = ["jose", "puto"];
console.log(obtenerPrimerElemento(numeros));
console.log(obtenerPrimerElemento(nombres));
const punto = {
    x: 10,
    y: 20,
    color: "rojo"
};
