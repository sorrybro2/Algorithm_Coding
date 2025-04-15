const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = parseInt(input[0]);
let num = input[1];
let sum = 0;
for(i=0;i<length;i++){
    sum += parseInt(num[i]);
}

console.log(sum);