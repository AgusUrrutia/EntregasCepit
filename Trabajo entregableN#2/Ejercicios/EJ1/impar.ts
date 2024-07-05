// Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
// En el caso de ser 0 (cero) el algoritmo deberá informarlo
import * as rls from "readline-sync";

let nro : number = rls.questionInt("Escriba un numero-->  ");


console.log(nro);

if(nro % 2 == 0 && nro != 0){
    console.log('El numero "'+  nro+ '" es par');
}if(nro % 2 == 1){
    console.log('El numero "'+ nro +'" es impar');
}else{
    console.log('El numero ingresado es "'+ nro +'"');
}
