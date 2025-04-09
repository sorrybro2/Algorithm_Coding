const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let basket = [];
for(let i = 1; i <= N; i++){
    basket.push(i);
}
for(let i = 0; i < M; i++){
    const [a,b] = input[i+1].split(' ').map(Number);
    const x = basket[a-1];
    basket[a-1] = basket[b-1];
    basket[b-1] = x;
}

console.log(basket.join(' '));