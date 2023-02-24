const { EventEmitter } = require('events'); // importando o modulo de eventos 
const evento = new EventEmitter(); // inicializando 

evento.on('saySomething', (msg) => { // ouvindo o evento saySomething e rodando uma arow function quando ele é ouvido (msg é o arg recebido de saySomething)
    console.log(`o evento foi ouvido, ${msg}`);
});

evento.emit('saySomething', "evento 1"); // acionando um evento chamado saySomething e passando um argumento ( "evento 1");
evento.emit('saySomething', "evento 2");

