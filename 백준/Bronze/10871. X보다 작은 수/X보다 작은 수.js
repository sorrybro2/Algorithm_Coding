const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [length, target] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

let answer = [];

for(let i = 0; i < length; i++){
    if(nums[i] < target){
        answer.push(nums[i]);
    }
}

console.log(answer.join(' '));