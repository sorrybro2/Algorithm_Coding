const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let basket = Array(N).fill(0);

for(let i=0; i<M; i++){
    const [a,b,c] = input[i+1].split(' ').map(Number);
    for(let j=a-1; j<b; j++){
        basket[j] = c;
    }
}

console.log(basket.join(' '));