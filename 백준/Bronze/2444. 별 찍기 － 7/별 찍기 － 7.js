const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = '';
const empty = ' ';
const star = '*';

for(let i = 1; i <= input; i++){
    answer += empty.repeat(input-i);
    answer += star.repeat(2*(i-1)+1);
    answer += '\n'
}

for(let i = input-1; i > 0; i--){
    answer += empty.repeat(input-i);
    answer += star.repeat(2*(i-1)+1);
    answer += '\n'
}

console.log(answer);
