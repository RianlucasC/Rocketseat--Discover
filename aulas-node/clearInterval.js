
// cria uma função que vai rodar de 1 em 1 segundo
let interval = setInterval(() => {
    console.log("check");
}, 1000);

// depois de 3 segundos vai rodar uma função com o clearInterval
setTimeout(() => {
    clearInterval(interval); // cancela o setInterval
    console.log("setInterval foi parado");
}, 3000);