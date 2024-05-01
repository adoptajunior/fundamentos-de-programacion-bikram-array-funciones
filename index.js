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
// console.log(separarPalabras("Hola Mundo"));

// 08 
function repetirString(string, num) {
    return string.repeat(num);
}
// console.log(repetirString("monja", 5));

// 09 
function esPrimo(num) {
    return num % 2 !== 0;
}

// MEZCLANDO ARRAYS Y FUNCIONES

// 10
function ordenarArray(myArray) {
    return myArray.sort(function (a, b) { return a - b });
}


/*
// 11
function obtenerPares() {
    return
}
*/

// ARRAYS

// 15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16
const holaMundo = ['Hola', 'Mundo'];

// 17 
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 18 
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// FUNCIONES

// 19
function multiplicacion(num1, num2) {
    return num1 * num2;
}


// 20
function division(num1, num2) {
    return num1 / num2;
}

// 21 
function esPar(num) {
    return num % 2 == 0;
}

// 22
const arrayFunciones = [
    function suma(num1, num2) {
        return num1 + num2
    },
    function resta(num1, num2) {
        return num1 - num2
    },
    function multiplicacion(num1, num2) {
        return num1 * num2
    },
];

// MEZCLANDO ARRAYS Y FUNCIONES

// 23
function ordenarArray2(myArray) {
    return myArray.sort(function (a, b) { return b - a });
}