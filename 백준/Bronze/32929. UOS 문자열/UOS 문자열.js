const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const uos = "UOS";

const idx = (Number(input)-1) % 3;

const ans = uos.charAt(idx);

console.log(ans);