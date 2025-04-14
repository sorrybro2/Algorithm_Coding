const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const word = input[0];

console.log(input[0].length);