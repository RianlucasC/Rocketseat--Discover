// clear timeOut vai canselar um setTimeout

let timer = setTimeout(() => {
    console.log("função executada")
}, 3000);

clearTimeout(timer); // cancelando o timer 