const input = require('fs').readFileSync(0, 'utf8').toString().trim().split('\n');

const n = Number(input[0]);
const size_num = input[1].split(' ');
const [cloth, pen] = input[2].split(' ');

Number(size_num, cloth, pen);
let bundle = 0;

for(const size of size_num){
    bundle += Math.ceil(size/cloth);
}

let pen_bundle = Math.floor(n/pen);
let pen_else = n%pen;

console.log(bundle);
console.log(`${pen_bundle} ${pen_else}`);