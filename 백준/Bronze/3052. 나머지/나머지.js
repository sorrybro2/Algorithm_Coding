const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const ary = Array(42).fill(false);
let cnt = 0;

for(let i = 0; i < input.length; i++){
    
    ary[(input[i]%42)] = true;
}

for(let i = 0; i < ary.length; i++){
    if(ary[i]){
        cnt++
    }
}

console.log(cnt);