const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 0; i < input.length; i++){
    let nums = input[i].split(' ');
    if(nums[0]==0 && nums[1]==0){
        break;
    }
    console.log(parseInt(nums[0])+parseInt(nums[1]));
}