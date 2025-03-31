const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = parseInt(input);
const N = a/4;
let word = "";

for(let i=0; i<N; i++){
    word += "long ";
}

console.log(word+"int");