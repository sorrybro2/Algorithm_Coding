const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const alphabet = Array(26).fill(-1);

for(let i = 0; i < input.length; i++){
    //a = 97
    const charCode = input[i].charCodeAt() - 97;
    if(alphabet[charCode] == -1){
           alphabet[charCode] = i;
    }
}

console.log(alphabet.join(' '));

