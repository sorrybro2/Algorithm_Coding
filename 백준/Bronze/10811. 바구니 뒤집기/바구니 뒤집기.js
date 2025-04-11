const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map(Number);
let basket = [];

for(let i = 1; i <= n; i++){
    basket.push(i);
}

for(let i = 0; i < m; i++){
    const [a,b] = input[i+1].split(' ').map(Number);
    const reversePart = basket.slice(a-1, b).reverse();
    basket.splice(a-1, b-(a-1), ...reversePart);
}

console.log(basket.join(' '));