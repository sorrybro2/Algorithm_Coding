const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const num = input[1].split(' ').map(Number);
const v = parseInt(input[2]);
let cnt = 0;

for(let i = 0; i < N; i++){
    if(num[i] == input[2]){
        cnt++;
    }
}

console.log(cnt);