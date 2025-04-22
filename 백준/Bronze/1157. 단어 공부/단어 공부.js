const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const word = input.toUpperCase();

let alphabet = Array(26).fill(0);

for(let i = 0; i < word.length; i++){
    const index = word.charCodeAt(i)-65;
    alphabet[index]++;
}

const max = Math.max(...alphabet);

let count = 0;
let maxindex = 0;

for(let i = 0; i < alphabet.length; i++){
    if(alphabet[i] == max){
        count++;
        maxIndex = i;
    }
}

if(count > 1){
    console.log('?');
}else{
    console.log(String.fromCharCode(maxIndex+65));                
}