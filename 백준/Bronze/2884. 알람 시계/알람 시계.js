const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if(M >= 45){
    console.log(H+" "+(M-45));
}else if(H > 0 && M < 45){
    console.log((H-1)+" "+(M+15));
}else if(H == 0 && M < 45){
    console.log(((H-1)+24)+" "+(M+15));
}