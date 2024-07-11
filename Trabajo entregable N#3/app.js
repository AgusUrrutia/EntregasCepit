const divs = document.getElementsByClassName('divs');// 👈 Se consigue todos los elementos del DOM que, contengan se utilice la clase llamada "divs"
const btns = document.getElementsByClassName('btns');// 👈 Se consigue todos los elementos del DOM que, contengan se utilice la clase llamada "btns"


//👇 de ésta forma creamos un arreglo en base a una collection HTML extraida del DOM para poder recorrerla con el bucle foreach
Array.from(btns).forEach(element => {

//a cada "element"(BOTON), le asignamos un metodo de "escucha", del evento "click", para realizar una accion al actuar el evento "click"

//    BOTON   metodo"escucha"    evento click
//     👇          👇                👇
    element.   addEventListener   ('click',()=>{

        //👇 utilizamos la misma funcionalidad para "parsear" la collection pero esta vez de divs
        Array.from(divs).forEach(element => {

//El metodo toggle o metodo "palanca"🕹️, es un método para el manejo de las clases del elemento, en este caso el elemento es el DIV.
//La funcionalidad principal del metodo "palanca" es principalmente: "si existe en éste elemento, ésta class, quitala" o "si no existe en este elemento, ésta class, asignala"

//            DIV    |metodo de "palanca"|     Class
//            👇              👇                👇
            element.   classList.toggle      ('oculto')
        });
    })
});



//-----------------------HASTA ACA ES PARTE DE ENTREGABLE--------------------------------
// toda ésta funcionalidad hace el efecto sombra
let angle = 45;

function rotateGradient() {
    angle = (angle + 1) % 360;
    const article = document.querySelector('article');
    article.style.setProperty('--gradient-angle', `${angle}deg`);
}

setInterval(rotateGradient, 15);