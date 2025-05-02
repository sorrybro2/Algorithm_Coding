const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const A = [];
const B = [];

for(let i = 1; i <= n; i++){
    A.push(input[i].split(' ').map(Number));
}

for(let i = n + 1; i <= n*2; i++){
    B.push(input[i].split(' ').map(Number));
}

const answer = [];

for(let i = 0; i < n; i++){
    const row = [];
    for(let j = 0; j < m; j++){
        const num = A[i][j] + B[i][j];
        row.push(num);
    }
    answer.push(row.join(' '));
}

console.log(answer.join('\n'));