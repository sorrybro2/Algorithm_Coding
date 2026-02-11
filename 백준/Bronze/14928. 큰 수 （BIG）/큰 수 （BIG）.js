const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = BigInt(input);

const ans = n % 20000303n;

console.log(ans.toString());