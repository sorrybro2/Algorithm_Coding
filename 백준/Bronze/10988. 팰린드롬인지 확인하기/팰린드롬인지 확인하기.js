const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const reverse = input.split('').reverse().join('');

if(input === reverse) {
    console.log(1);
}else{
    console.log(0);
}