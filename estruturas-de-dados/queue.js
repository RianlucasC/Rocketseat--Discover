class Queue  {
    constructor () {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        const item = this.data.shift();
        console.log(`${item} saiu da fila`);
    }
}

const fila = new Queue();

fila.enqueue('a');
fila.enqueue('b');
fila.enqueue('c');
fila.dequeue();
fila.dequeue();
fila.dequeue();