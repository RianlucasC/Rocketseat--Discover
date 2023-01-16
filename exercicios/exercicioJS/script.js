let weight;
console.log(typeof weight);

let name = "clebi";
let age = 17;
let stars = 4.9;
let isSubscribed = true;

let student = {
    name: "clebi",
    age: 17,
    weight: 64.9,
    isSubscribed: true,
};
console.log(student);

const john = {
    name: "john",
    age: 22,
    weight: 75.8,
    isSubscribed: true,
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} quilos`)

let students = [
    student
];

students[1] = john;

console.log(students);
console.log(students[0]);
