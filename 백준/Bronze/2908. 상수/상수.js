const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(' ');

const reverseN = n.split('').reverse().join('');
const reverseM = m.split('').reverse().join('');

console.log(Math.max(parseInt(reverseN),parseInt(reverseM)));