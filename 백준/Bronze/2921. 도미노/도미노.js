const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
let sum = 0;

for(let i = 0; i <= n; i++){
    for(let j = 0; j <= i; j++){
        sum += i + j;
    }
}

console.log(sum);