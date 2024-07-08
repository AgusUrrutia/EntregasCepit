"use strict";
// Guarda la información de los siguientes arrays:
//     const precios : number[] = [525, 3500, 400, 1999];
//     const productos : string[] = [“Leche”, “Galletitas”, “Harina”, “Queso”];
// En un archivo "precios.txt" y "productos.txt" respectivamente.
// Luego recupera la información en forma de array nuevamente y muestrala por consola
Object.defineProperty(exports, "__esModule", { value: true });
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
// Para esto hace falta instalar unas dependencias de "fs"=> @types/node 
// o por otro lado, actualizar a la ultima version de Typescript "npm i npm@latest"
var fs = require("fs");
//utilizamos los metodos creados para escribir los archivos
escribir("productos", productos);
escribir("precios", precios);
//utilizamos los metodos creados para leer los archivos y mostrarlos por consola
leer("productos");
leer("precios");
//--------------------METODO DE ESCRITURA EN ARCHIVOS----------------
function escribir(archivo, arr) {
    fs.writeFile("".concat(archivo, ".txt"), 
    // Sabemos que tenemos que enviar en este parametro un string, entonces utilizamos la funcion extraerArr()
    // que segun que parametro le enviemos, nos devuelve una cadena string con todos los elementos que estén
    // dentro del arreglo
    extraerArr(arr), function (err) {
        if (err) {
            return console.log("\u274CHubo un error \uD83D\uDE05 al escribir el archivo=> \"".concat(archivo, ".txt\" \u274C: ") + err);
        }
        console.log("\u2705El archivo=> \"".concat(archivo, ".txt\" fue escrito exitosamente\u2705"));
    });
}
//---------------METODO DE EXTRAER UNA CADENA EN BASE A ARRAY-------------
function extraerArr(arr) {
    var txt = "";
    arr.forEach(function (element) {
        //Por cada elemento, se escribe, anidando al string "txt"
        if (txt !== "") {
            txt += ", " + element;
        }
        else {
            txt = element;
        }
    });
    return txt;
}
//-------------- METODO DE LECTURA ----------------
function leer(archivo) {
    fs.readFile("".concat(archivo, ".txt"), 'utf8', function (err, data) {
        if (err) {
            return console.log("\u274CHubo un error el leer el archivo=> \"".concat(archivo, ".txt\" \uD83D\uDE05 \u274C: ") + err);
        }
        console.log("Los ".concat(archivo, " son \uD83D\uDC49 ") + data);
    });
}
