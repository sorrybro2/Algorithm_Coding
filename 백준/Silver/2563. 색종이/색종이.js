const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const paper = Array.from(Array(100), () => Array(100).fill(0));
let result = 0;

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  for (let dx = x; dx < x + 10; dx++) {
    for (let dy = y; dy < y + 10; dy++) {
      if (paper[dx][dy] === 0) {
        paper[dx][dy] = 1; 
        result++;
      }
    }
  }
}

console.log(result);
