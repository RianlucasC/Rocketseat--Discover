// setTimeout vai rodar uma função depois de x milisegundos

const timeOut = 3000; // 3 segundos
const finished = () => console.log("a função foi executada"); // função que vai ser rodada no setTimeout

setTimeout(finished, timeOut); // função e  tempo
console.log('teste');