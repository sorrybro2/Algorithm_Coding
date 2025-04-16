const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = parseInt(input[0]);

for(let i = 1; i <= count; i++){
    const [charNum, word] = input[i].split(' ');
    const num = parseInt(charNum);
    
    let answer = '';
    
    for(let char of word){
        answer += char.repeat(num);
    }
    
    console.log(answer);
}