function transformarNota (nota) {
    if (nota >= 90) {
        return "A";
    } else if (nota >= 80 && nota <= 89) {
        return "B";
    } else if (nota >= 70 && nota <= 79) {
        return "C";
    } else if (nota >= 60 && nota <= 69) {
        return "D";
    } 
    return "F";
}

let nota1 = transformarNota(71);
console.log(nota1);