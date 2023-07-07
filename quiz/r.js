let r = ["opt1", "opt2", "opt3"];
let randomNumber = Math.floor(Math.random() * 4)
r.splice(randomNumber,0,"opt4");

console.log(r);