const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 0;

const words = input.split('')

for(let i = 0; i < words.length; i++){
    const word = words[i];
    if(word >= 'A' && word <= 'C'){
        answer += 3;
    }else if(word >= 'D' && word <= 'F'){
        answer += 4;
    }else if(word >= 'G' && word <= 'I'){
        answer += 5;
    }else if(word >= 'J' && word <= 'L'){
        answer += 6;
    }else if(word >= 'M' && word <= 'O'){
        answer += 7;
    }else if(word >= 'P' && word <= 'S'){
        answer += 8;
    }else if(word >= 'T' && word <= 'V'){
        answer += 9;
    }else if(word >= 'W' && word <= 'Z'){
        answer += 10;
    }
}

console.log(answer);