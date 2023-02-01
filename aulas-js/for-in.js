let person = {
    name: "cleibi",
    age: 22,
    weight: 88.6,
};

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}