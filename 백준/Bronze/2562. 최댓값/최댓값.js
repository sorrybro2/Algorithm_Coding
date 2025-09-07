const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let list = [];

for (let i = 0; i < 9; i++){
    list[i] = Number(input[i]);
}

const MaxValue = Math.max(...list);
const num = list.indexOf(MaxValue)+1;

console.log(MaxValue);
console.log(num);