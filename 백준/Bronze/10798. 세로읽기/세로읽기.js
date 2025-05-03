const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let maxLength = Math.max(...input.map(line => line.length));

let result = '';

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i]) {
      result += input[j][i];
    }
  }
}

console.log(result);