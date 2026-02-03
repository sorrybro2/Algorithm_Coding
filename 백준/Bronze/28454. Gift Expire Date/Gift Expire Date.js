const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [now_year, now_month, now_day] = input[0].split("-").map(Number);
const cnt = Number(input[1]);

let sum = 0;

for(let i = 2; i < 2 + cnt; i++){
    const [year, month, day] = input[i].split("-").map(Number);
    if (now_year < year){
        sum += 1;
    }else if (now_year == year && now_month < month){
        sum += 1;
    }else if (now_year == year && now_month == month && now_day <= day){
        sum += 1;
    }
}

console.log(sum);