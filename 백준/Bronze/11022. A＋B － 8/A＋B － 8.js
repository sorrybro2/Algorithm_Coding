const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let answer = [];

for(let i = 1; i <= T; i++){
    const [a, b] = input[i].split(' ').map(Number);
    answer.push(`Case #${i}: ${a} + ${b} = ${a+b}`);
}

console.log(answer.join('\n'));