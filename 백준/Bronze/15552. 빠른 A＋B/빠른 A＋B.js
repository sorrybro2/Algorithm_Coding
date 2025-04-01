const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = parseInt(input[0]);
const answer = [];

for(let i = 1; i <= a; i++){
    const [b, c] = input[i].split(' ').map(Number);
    answer.push(b+c);
}


    console.log(answer.join('\n'));
