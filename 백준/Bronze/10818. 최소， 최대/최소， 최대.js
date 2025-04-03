const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const num = input[1].split(' ').map(Number);

let max = num[0];
let min = num[0];

for(let i = 0; i < N; i++){
    if(max < num[i]){
        max = num[i];
    }
    if(min > num[i]){
        min = num[i];
    }
}

console.log(`${min} ${max}`);