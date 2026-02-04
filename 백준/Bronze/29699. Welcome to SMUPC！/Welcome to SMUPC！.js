const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);

let word = "WelcomeToSMUPC";

const idx = (num-1)%14

const ans = word.charAt(idx);

console.log(ans);
