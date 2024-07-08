"use strict";
// Realice un programa que devuelva la potencia de un número.
// La base y el exponente deben ser ingresados por teclado.
// Sólo deben admitirse exponentes mayores o iguales a cero.
// Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos.
// (se resuelve con funciones)
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt('Escriba una base:  =>   ');
//lo hago de ésta manera solo para que se manifeste el metodo una vez se haya ingresado
//una base en el "question" anterior👽
console.log("El resultado es:    " + ingresarExponente(base) + "   😎");
function ingresarExponente(base) {
    //asigno una flag🚩 solo para saber cuando dejo de pedir un numero valido
    var flag = false;
    var exponente = 0;
    while (flag === false) {
        exponente = rls.questionInt('Escriba un exponente valido (Mayor que "0") =>   ');
        //if ternario
        exponente < 0 ? flag = false : flag = true;
    }
    //Metodo de Math de matematicas devuelve la potencia
    return Math.pow(base, exponente);
    // //Metodo de operador
    // return base ** exponente
    // //Metodo de bucle for
    // let res : number = 1;
    // for (let i = 0; i < exponente; i++) {
    //     res *= base;
    //   }
    // return res;
}
