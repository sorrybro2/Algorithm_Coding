const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [sum, sub] = input.split(' ').map(Number);

if(sum < sub || (sum + sub) % 2 !== 0){
    console.log(-1);
}else{
   const x = (sum + sub) / 2;
   const y = sum - x;
   console.log(`${x} ${y}`);
}