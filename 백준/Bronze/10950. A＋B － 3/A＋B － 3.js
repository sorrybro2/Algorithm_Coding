const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const T = Number(input[0]);

for(let i = 1; i <= T; i++){
    const[a,b] = input[i].split(' ').map(Number);
    console.log(a+b);
}
