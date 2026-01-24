const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++){
    const s = input[i];
    const low_s = s.trim().toLowerCase();
    console.log(low_s);
}