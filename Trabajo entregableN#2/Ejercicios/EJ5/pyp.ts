// Guarda la información de los siguientes arrays:
//     const precios : number[] = [525, 3500, 400, 1999];
//     const productos : string[] = [“Leche”, “Galletitas”, “Harina”, “Queso”];
// En un archivo "precios.txt" y "productos.txt" respectivamente.
// Luego recupera la información en forma de array nuevamente y muestrala por consola


const precios : number[] = [525, 3500, 400, 1999];

const productos : string[] = ["Leche", "Galletitas", "Harina", "Queso"];


// Para esto hace falta instalar unas dependencias de "fs"=> @types/node 
// o por otro lado, actualizar a la ultima version de Typescript "npm i npm@latest"
import * as fs from 'fs';

//utilizamos los metodos creados para escribir los archivos
escribir("productos", productos);
escribir("precios", precios);

//utilizamos los metodos creados para leer los archivos y mostrarlos por consola
leer("productos");
leer("precios");


//--------------------METODO DE ESCRITURA EN ARCHIVOS----------------
function escribir(archivo :string,arr : Array<any> ) {
  fs.writeFile(`${archivo}.txt`, 

    // Sabemos que tenemos que enviar en este parametro un string, entonces utilizamos la funcion extraerArr()
    // que segun que parametro le enviemos, nos devuelve una cadena string con todos los elementos que estén
    // dentro del arreglo
    extraerArr(arr) 

  , function(err) {
    if (err) {
      return console.log(`❌Hubo un error 😅 al escribir el archivo=> "${archivo}.txt" ❌: ` + err);
    }
    console.log(`✅El archivo=> "${archivo}.txt" fue escrito exitosamente✅`);
  });
}


//---------------METODO DE EXTRAER UNA CADENA EN BASE A ARRAY-------------
function extraerArr(arr : Array<any>): string{
  let txt : string = "";
  arr.forEach(element => {
    //Por cada elemento, se escribe, anidando al string "txt"
    if(txt !== ""){
      txt += ", " + element;
    }else{
      txt = element;
    }
    
  })
  return txt;
}



//-------------- METODO DE LECTURA ----------------
function leer(archivo :string){
  
  fs.readFile(`${archivo}.txt`, 'utf8', (err, data) => {
    if (err) {
      return console.log(`❌Hubo un error el leer el archivo=> "${archivo}.txt" 😅 ❌: ` + err);
    }
    console.log(`Los ${archivo} son 👉 ` + data);
  });
  
}