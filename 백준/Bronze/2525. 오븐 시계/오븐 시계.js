const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

const totalMinate = A*60 + B + C;
const X = totalMinate%1440;

const hour = ((X-(X%60))/60);
const minate = X%60;

console.log(hour+" "+minate);
