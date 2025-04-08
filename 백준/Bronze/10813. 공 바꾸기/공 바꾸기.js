const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let answer = [];

for(let i = 1; i <= N; i++){
   answer.push(i);
}

for(let i = 1; i <= M; i++){
    let [a, b] = input[i].split(' ').map(Number);
    let x = answer[a-1];
    answer[a-1] = answer[b-1];
    answer[b-1] = x;
}

console.log(answer.join(' '));