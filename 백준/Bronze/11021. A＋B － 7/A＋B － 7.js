const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
const answer = [];

for(let i = 1; i <= T; i++){
    let [a,b] = input[i].split(' ').map(Number);
    answer.push(`Case #${i}: `+(a+b));
}

console.log(answer.join('\n'));