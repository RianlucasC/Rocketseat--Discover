function imprimirDados(dado){
    console.log("outras tarefas");
    console.log(dado());
}

imprimirDados(function () {
    return "olá mundo";
})