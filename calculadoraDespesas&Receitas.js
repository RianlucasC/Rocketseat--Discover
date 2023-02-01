
function calcReceitasDespesas(obj) {
    let saldo = 0;
    for(let value of obj.receitas) {
        saldo += value;
    };
    for(let value of obj.despesas) {
        saldo -= value;
    };
    return saldo < 0 ?  `${saldo.toFixed(2)} saldo negativo` : `${saldo.toFixed(2)} saldo postivo`;
}

const family = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00,],
};

console.log(calcReceitasDespesas(family));

