const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);
let ans = 1;

if(num == 0){
    console.log(ans);
}else{
    for (let i = num; i > 0; i--){
        ans *= i;
    }
    console.log(ans);
}