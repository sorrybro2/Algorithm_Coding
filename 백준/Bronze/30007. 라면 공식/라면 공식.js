const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

for(let i = 1; i <= n; i++){
    const [A, B, X] = input[i].split(' ').map(Number);
    const ans = A * (X - 1) + B;
    console.log(ans);
}