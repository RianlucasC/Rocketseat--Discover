const questions = [
    "O que aprendihoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje"
]

const ask = ( index = 0) => {
    process.stdout.write(questions[index] + "\n");
}

ask()

const answers =[];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers);
        process.exit();
    }
})
