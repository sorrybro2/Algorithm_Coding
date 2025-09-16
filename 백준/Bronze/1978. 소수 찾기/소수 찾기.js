const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);
const list = input[1].trim().split(/\s+/).map(Number);

const answer = []; 
for (let i = 0; i < n; i++) {
  const num = list[i];
  if (num < 2) continue;
  for (let j = 2; j < num; j++) {
    if (num % j === 0) { answer.push(num); }
  }
}
const compositeCount = new Set(answer).size; 
const valid = list.filter(v => v >= 2).length;
console.log(valid - compositeCount);
