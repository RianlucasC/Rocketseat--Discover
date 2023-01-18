let techs = ["html", "css", "js"];
techs.push("nodejs"); // adiciona ao final 
techs.unshift("sql"); // adiciona no começo
let copy = techs.slice(0,2) // copia do array
console.log(techs);
techs.pop(); // remove do final
techs.shift(); // remove do inicio
console.log(techs);
console.log(copy);