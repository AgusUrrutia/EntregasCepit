// Implemente un algoritmo de ordenamiento con el método 
// Bubble Sort para que ordene un arreglo de longitud N en orden descendente📉👎

let arr : Array<number> = [10,15,20,35,60,25,30,45,40,55,50,65];

console.log("Arreglo desordenado: 👉 [" + arr + "]👈");

console.log("Arreglo ordenado:    👉 ["+ bubbleSort(arr) + "]👈");

function bubbleSort(arr : Array<number>): Array<number> {
    let len = arr.length;

    // Éste bucle se realiza por *cada uno de los elementos que esten contenidos en el arreglo*
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    //👆Éstas dos formas de ordenar un arreglo👇, son diferentes, pero cumplen la misma funcion ¡¡ORDENAR!!.

    //Esta es la manera de usar un sort de los metodos de ECMAscript 5 ✅, lo que permite
    // que al dia de hoy, sea compatible con todos los navegadores actuales😎
    // arr.sort((a,b)=>a - b);
    return arr;
}