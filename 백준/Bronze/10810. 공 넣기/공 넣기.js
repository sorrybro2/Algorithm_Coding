const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let baskets = Array(N).fill(0);

for(let a=1; a<=M; a++){
    const [i,j,k] = input[a].split(' ').map(Number);
    
    for(let a=i-1; a<j; a++){
        baskets[a] = k;
    }
}
console.log(baskets.join(' '));