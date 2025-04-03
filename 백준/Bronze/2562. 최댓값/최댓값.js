const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input.map(Number);

let max = a[0];
let n = 1;

for(let i = 0; i < 9; i++){
    if(max < a[i]){
        max = a[i];
        n = (i+1);
    }
}

console.log(max);
console.log(n);