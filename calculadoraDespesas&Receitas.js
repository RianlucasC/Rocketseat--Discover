function calcularSaldo (receitas, despesas){
    let totalReceitas = 0;
    let totalDespesas = 0;
    for (let valor of receitas) {
        totalReceitas += valor;
    }
    for (let valor of despesas){
        totalDespesas += valor;
    }
    let saldo = totalReceitas - totalDespesas;
    return  saldo < 0? `o Saldo é negativo ${saldo}`: `o Saldo é positivo ${saldo}`;
}

console.log(calcularSaldo([1,11], [2,3,4]));
