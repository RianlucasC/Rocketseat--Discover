const cart = {
    quantity: 2,
    total: 200
}

// bad 
cart.quantity = 3;

// good 
const newCart = {...cart, quantity: 3} 
/* criando um novo objeto com as propriedades 
de cart só que com uma quantity  nova 
*/

console.log(newCart);