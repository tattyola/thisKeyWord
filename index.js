function run (s) {
    return `Speed ${s * this.age}`;
}

let cat = {
    name: 'Chika',
    age: 3,
    run: run
}

let dog = {
    name: 'Barsik',
    age: 4,
    run: run
}

console.log(cat)
console.log(dog)
console.log(cat.run(3))
console.log(dog.run(3))