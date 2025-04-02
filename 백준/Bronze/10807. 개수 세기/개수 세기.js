const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
let nums = [];
let cnt = 0;
for(let i = 0; i < N; i++){
    nums = input[1].split(' ');
}
const v = parseInt(input[2]);

for(let i = 0; i < N; i++){
    if(nums[i]==v){
        cnt++;
    }
}

console.log(cnt);