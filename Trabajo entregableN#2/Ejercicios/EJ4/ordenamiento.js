// Implemente un algoritmo de ordenamiento con el método 
// Bubble Sort para que ordene un arreglo de longitud N en orden descendente📉👎
var arr = [10, 15, 20, 35, 60, 25, 30, 45, 40, 55, 50, 65];
console.log("Arreglo desordenado: 👉 [" + arr + "]👈");
console.log("Arreglo ordenado:    👉 [" + bubbleSort(arr) + "]👈");
function bubbleSort(arr) {
    var _a;
    var len = arr.length;
    // Éste bucle se realiza por *cada uno de los elementos que esten contenidos en el arreglo*
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    //👆Éstas dos formas de ordenar un arreglo👇, son diferentes, pero cumplen la misma funcion ¡¡ORDENAR!!.
    //Esta es la manera de usar un sort de los metodos de ECMAscript 5 ✅, lo que permite
    // que al dia de hoy, sea compatible con todos los navegadores actuales😎
    // arr.sort((a,b)=>a - b);
    return arr;
}
