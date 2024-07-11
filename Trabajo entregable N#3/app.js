const divs = document.getElementsByClassName('divs');
const btns = document.getElementsByClassName('btns');

Array.from(btns).forEach(element => {
    element.addEventListener('click',()=>{
        Array.from(divs).forEach(element => {
            element.classList.toggle('oculto')
        });
    })
});


let angle = 45;

function rotateGradient() {
    angle = (angle + 1) % 360; // Increase angle and wrap around at 360
    const article = document.querySelector('article');
    article.style.setProperty('--gradient-angle', `${angle}deg`);
}

setInterval(rotateGradient, 15); // Rotate every 100ms