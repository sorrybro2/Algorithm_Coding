const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const total = parseInt(input[0]);
const count = parseInt(input[1]);
let mapTotal = 0;

for(let i = 2; i < count+2; i++){
    let [a,b] = input[i].split(' ').map(Number);
    mapTotal += a*b;
}

if(total == mapTotal){
    console.log("Yes");
}else{
    console.log("No");
}
