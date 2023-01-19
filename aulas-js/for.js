/*
for (let c = 0; c < 10; c++ ) {
    console.log(c);
}
*/
/*
for (let c = 0; c < 10; c++) {
    console.log(c)
    if (c == 5) {
        break
    }
}
*/ 

for (let c = 0; c < 10; c++) {
    if (c == 5) {
        continue
    }
    console.log(c)
}
/*
for(var; condição; incremento) {
    if (expressão) {
        continue;
        se a expressão for verdadeira o continue 
        ignora o resto do código e continua o loop
    }
}
*/