// construct function 
function Celular (marca,modelo,armazenamento) {
    this.marca = marca,
    this.modelo = modelo,
    this.armazenamento = armazenamento
}

const celular1 = new Celular("samsung","s10",128);
const celular2 = new Celular("iphone","12pro",64);
console.log(celular1);
console.log(celular2);