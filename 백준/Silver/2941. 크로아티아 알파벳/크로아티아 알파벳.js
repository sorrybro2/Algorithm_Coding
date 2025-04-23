const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for(const letter of croatia){
   input = input.split(letter).join('A');
}

console.log(input.length);