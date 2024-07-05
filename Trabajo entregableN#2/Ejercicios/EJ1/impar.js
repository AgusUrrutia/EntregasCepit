"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nro = rls.questionInt("Escriba un numero-->  ");
console.log(nro);
if (nro % 2 == 0 && nro != 0) {
    console.log('El numero "' + nro + '" es par');
}
if (nro % 2 == 1) {
    console.log('El numero "' + nro + '" es impar');
}
else {
    console.log('El numero ingresado es "' + nro + '"');
}
