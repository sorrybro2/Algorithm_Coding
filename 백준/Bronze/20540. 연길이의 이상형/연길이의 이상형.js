const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const mbti = input.split('');

let ans_mbti = "";

for (let i = 0; i < 4; i++){
    if(mbti[i] == "I"){
        ans_mbti += "E";
    }else if(mbti[i] == "E"){
        ans_mbti += "I"; 
    }else if(mbti[i] == "S"){
        ans_mbti += "N"; 
    }else if(mbti[i] == "N"){
        ans_mbti += "S"; 
    }else if(mbti[i] == "T"){
        ans_mbti += "F"; 
    }else if(mbti[i] == "F"){
        ans_mbti += "T"; 
    }else if(mbti[i] == "P"){
        ans_mbti += "J"; 
    }else if(mbti[i] == "J"){
        ans_mbti += "P"; 
    }
}

console.log(ans_mbti);