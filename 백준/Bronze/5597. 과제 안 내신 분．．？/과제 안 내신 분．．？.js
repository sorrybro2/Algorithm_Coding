const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let list = Array(31).fill(false);

for(let i = 0; i < input.length; i++){
    list[input[i]] = true;
}

for(let i = 1; i < list.length; i++){
    if(!list[i]){
        console.log(i);
    }
}