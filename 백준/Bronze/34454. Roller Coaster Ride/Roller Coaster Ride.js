const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const c = Number(input[1]);
const p = Number(input[2]);

if (n <= c * p){
    console.log("yes");
}else{
    console.log("no")
}