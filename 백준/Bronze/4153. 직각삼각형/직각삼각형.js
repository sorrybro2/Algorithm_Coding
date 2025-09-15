const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  if (a === 0 && b === 0 && c === 0) break;

  if (c * c === a * a + b * b ||
      a * a === b * b + c * c ||
      b * b === a * a + c * c) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
