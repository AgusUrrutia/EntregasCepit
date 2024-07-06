//  Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar
import * as rls from "readline-sync";

let arrAsignado : Array<number> = [4,7,9,3,1,45,67,23,29,78,11,16];

let numG : number = numMasGrande(arrAsignado);
console.log("El numero más grande es 👉 " + numG +" 👈");
console.log("           y");
console.log(parImpar(numG));


//con esta funcion es necesario pasar un arreglo, y a demas, es una función reutilizable😎
function numMasGrande(arr : Array<number>): number {
    let numMG : number = 0; //numMG == "Numero más grande"

    arr.forEach(element => { // foreach utilizado ✅
        if(numMG === 0){
            numMG = element;
        }
        if(numMG < element){
            numMG = element;
        }
    });
    return numMG;
}

//Esta funcion es copiada del ejecicio 1👽

function parImpar(num: number): string {
    if(num % 2 == 0 && num != 0){
        return"El numero 👉 "+  num+ " 👈 es par";
    }if(num % 2 == 1){
        return "El numero 👉 "+ num +" 👈 es impar";
    }else{
        return "El numero ingresado es 👉 "+ num +" 👈";
    }
}