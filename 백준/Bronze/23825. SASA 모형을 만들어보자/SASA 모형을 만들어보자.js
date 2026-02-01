const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [S, A] = input.split(' ').map(Number);

const s_cnt = Math.trunc(S / 2);
const a_cnt = Math.trunc(A / 2);

const ans = Math.min(s_cnt, a_cnt);

console.log(ans);