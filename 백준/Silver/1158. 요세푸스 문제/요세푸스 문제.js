const [num,k] = require('fs').readFileSync(0, 'utf8').trim().split(' ').map(Number);

let arr = [];
let answer = [];

for(let i = 1; i <= num; i++){
    arr.push(i);
}

let idx = 0;
while(arr.length){

    // 원래는 answer에 push 후 splice로 part1,2로 나눈 후, 붙이는 거를 while문으로 돌릴려고 했는데,
    // 붙일 수 있는 방법이 없어서 인덱스를 돌려서 답만 answer에 push 해버림!

    idx = (idx + k - 1) % arr.length;

    // splice는 배열 형태이므로 배열 제외하고 숫자만 뽑고 싶다면 변수에 [] 둘러야함!
    const [picked] = arr.splice(idx,1);
    answer.push(picked);
}

console.log(`<${answer.join(', ')}>`)