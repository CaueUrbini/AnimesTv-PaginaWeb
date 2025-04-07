const imagens = ["./img/fundo1.jpg", "./img/fundo2.jpg", "./img/fundo4.webp", "./img/fundo3.jpg"];
let index = 0;
// array comeca do 0 

function fundo(){
    index = (index+1)% imagens.length; // funciona como se fosse while, e quando chega no final das imagens ele retorna ao inicio
    document.body.style.backgroundImage = `url('${imagens[index]}')`;
}

document.body.style.backgroundImage = `url('${imagens[0]}')`;

setInterval(fundo, 50000);


