const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [b_year, b_month, b_day] = input[0].split(' ').map(Number);
const [year, month, day] = input[1].split(' ').map(Number);

let international_age = 0;
let Korean_age = 0;
let calendar_age = 0;

calendar_age = year - b_year
Korean_age = calendar_age + 1;

if (b_month < month){
    international_age = calendar_age
}
if (b_month > month){
    international_age = calendar_age - 1
}
if (b_month == month){
    if (b_day <= day){
        international_age = calendar_age
    }else{
        international_age = calendar_age - 1
    }
}

console.log(international_age);
console.log(Korean_age);
console.log(calendar_age);