"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrAsignado = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var numG = numMasGrande(arrAsignado);
console.log("El numero más grande es 👉 " + numG + " 👈");
console.log("           y");
console.log(parImpar(numG));
//con esta funcion es necesario pasar un arreglo, y a demas, es una función reutilizable😎
function numMasGrande(arr) {
    var numMG = 0; //numMG == "Numero más grande"
    arr.forEach(function (element) {
        if (numMG === 0) {
            numMG = element;
        }
        if (numMG < element) {
            numMG = element;
        }
    });
    return numMG;
}
function parImpar(num) {
    if (num % 2 == 0 && num != 0) {
        return "El numero 👉 " + num + " 👈 es par";
    }
    if (num % 2 == 1) {
        return "El numero 👉 " + num + " 👈 es impar";
    }
    else {
        return "El numero ingresado es 👉 " + num + " 👈";
    }
}
