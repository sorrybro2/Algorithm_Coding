const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [A, P, C] = input;

console.log(Math.max(A + C, P));