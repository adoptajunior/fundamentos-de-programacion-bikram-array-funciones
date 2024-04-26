// ARRAYS
// 01 
let arrayVacio = [];
// 02
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 03 
let arrayNumerosPares = [0, 2, 4, 6, 8];
// 04 
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// FUNCIONES
// 05
function suma(num1, num2) {
    return num1 + num2;
}
// 06 
function potenciacion(num1, num2) {
    return Math.pow(num1, num2);
}
// 07
let palabras = [];
function separarPalabras(string) {
    return palabras = string.split(' ');
}
console.log(separarPalabras("Hola Mundo"));

// 08 
function repetirString(string, num) {
    return string.repeat(num);
}
console.log(repetirString("monja", 5));

// 09 
function esPrimo(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esPrimo(13));

// MEZCLANDO ARRAYS Y FUNCIONES
// 10
function ordenarArray(arrayNumeros) {
    return sort.arrayNumeros;
}
console.log([2, 7, 3, 5]);
