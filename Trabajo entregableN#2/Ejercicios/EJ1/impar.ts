// Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
// En el caso de ser 0 (cero) el algoritmo deberá informarlo
import * as rls from "readline-sync";

let nro : number = rls.questionInt("Escriba un numero-->  ");
console.log(parImpar(nro));

function parImpar(num: number): string {
    if(num % 2 == 0 && num != 0){
        return'El numero "'+  num+ '" es par';
    }if(num % 2 == 1){
        return 'El numero "'+ num +'" es impar';
    }else{
        return 'El numero ingresado es "'+ num +'"';
    }
}

