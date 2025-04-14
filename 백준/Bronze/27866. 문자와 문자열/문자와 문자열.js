const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const word = input[0];
const num = parseInt(input[1]);

console.log(input[0][num-1]);