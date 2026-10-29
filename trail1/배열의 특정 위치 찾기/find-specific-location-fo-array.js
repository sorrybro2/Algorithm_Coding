const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let ans = 0;
let ans2 = 0;
let cnt = 0;

for(let i = 0; i <input.length; i++){
    if(i%2==1){
        ans += input[i];
    }
    if((i+1)%3==0){
        ans2 += input[i];
        cnt += 1;
    }
}

const avg = ans2/cnt;

console.log(`${ans} ${avg.toFixed(1)}`);