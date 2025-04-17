const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const inputChess = input.split(' ').map(Number);

let chess = [1,1,2,2,2,8];
let answer = [];

for(let i = 0; i < chess.length; i++){
    answer[i] = chess[i]-inputChess[i];
}

console.log(answer.join(' '));