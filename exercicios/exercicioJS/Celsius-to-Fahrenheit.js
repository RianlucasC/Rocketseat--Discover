function CelsiusToFahrenheit (temp) {
    let num;
    if (temp.includes("C") || temp.includes("c")) {
        num = Number(temp.toUpperCase().replace("C", ""));
        return `${num * 9/5 + 32}F`;
    } else if (temp.includes("F") || temp.includes("f")) {
        num = Number(temp.toUpperCase().replace("F", ""));
        return `${(num - 32) * 5/9}C`;
    } else {
        console.log("Grau não identificado");
    }
}

console.log(CelsiusToFahrenheit("10C"));
console.log(CelsiusToFahrenheit("50F"));