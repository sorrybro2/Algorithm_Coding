const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = parseInt(input[0].trim());
let sum = 0;

const number = input[1].split(' ').map(Number)

const max = Math.max(...number);
for(let i = 0; i < length; i++){
    const div = number[i]/max*100;
    sum += div;
}
const avg = sum/length;

console.log(avg);
