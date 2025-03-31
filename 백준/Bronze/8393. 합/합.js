const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
let sum = 0;

for(let i = 1; i <= num; i++){
    sum += i;
}

console.log(sum);