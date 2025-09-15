const [a,b] = require('fs').readFileSync(0, 'utf8').trim().split(' ').map(Number);

const answer = (a+b)*(a-b);

console.log(answer);