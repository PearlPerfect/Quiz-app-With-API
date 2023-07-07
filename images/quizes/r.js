const options = ["op1", "op2", "op3"];

let randomIndex = Math.floor(Math.random() * 4);
console.log(randomIndex)

options.splice(randomIndex,0,"op4");

console.log(options)