const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const chess = [];

for (let i = 0; i < 9; i++) {
    const line = input[i].split(' ').map(Number);
    chess.push(line);
}

let rows = 0;
let columns = 0;
let max = Number.MIN_SAFE_INTEGER;


for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (chess[i][j] > max) {
            max = chess[i][j];
            rows = i + 1;
            columns = j + 1;
        }
    }
}

console.log(max);
console.log(`${rows} ${columns}`);
