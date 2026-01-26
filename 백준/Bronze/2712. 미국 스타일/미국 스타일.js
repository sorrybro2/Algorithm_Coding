const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
for (let i = 1; i <= n; i++){
    const line = input[i].trim().split(' ');
    
    const num = line[0];
    const w = line[1];
    
    let ans_num = 0;
    let unit = "";
    
    if (w == "kg") {
        ans_num = num * 2.2046;
        unit = "lb"
    }else if (w == "l"){
        ans_num = num * 0.2642;
        unit = "g"
    }else if (w == "g"){
        ans_num = num * 3.7854;
        unit = "l"
    }else if (w == "lb"){
        ans_num = num * 0.4536;
        unit = "kg"
    }
    
    console.log(`${ans_num.toFixed(4)} ${unit}`);
    
}