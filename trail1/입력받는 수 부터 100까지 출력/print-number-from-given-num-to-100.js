const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

const a = input
let ans = [];

for(let i = a; i <= 100; i++){
    ans.push(i);
}

console.log(ans.join(" "));