const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);

for(i=1;i<=count;i++){
    const word = input[i];
    const lastChar = input[i].length-1;
    console.log(input[i][0]+input[i][lastChar]);
}