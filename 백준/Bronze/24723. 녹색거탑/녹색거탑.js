const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = 2 ** Number(input);

console.log(num);