class Stack {
    constructor() {
        this.data = []; // array
        this.top = -1; // valor que vai servir como indice do array
    }

    push(value) {
        // adicionar valor a pilha 
        this.top++; // incrementando o top para o valor adicionado sempre ser o ultimo 
        this.data[this.top] = value; // adicionando o valor no array data no indice top 
        return this.data; // retornando o array 
    }

    pop() {
        if (this.top < 0 ) return undefined; /* se o top for menor que o significa que não temos valores no array 
        assim não tem nada para deletar por isso retornamos undefined
        */
        const poppedTop = this.data[this.top]; // armazenando o valor antes de deletar para mostrar qual valor foi deletado 
        delete this.data[this.top]; // deletando 
        this.top--; // decrementando top
        return poppedTop; // retornando o valor deletado 
    }

    peek() {
        // retorna o valor que esta no topo da pilha
        return this.top >= 0 ? this.data[this.top]: undefined;
    }
}

const stack = new Stack();

stack.push('learning');
stack.push('data');
console.log(stack.push('structures'));

console.log(stack.peek());
stack.pop();
console.log(stack.peek());
