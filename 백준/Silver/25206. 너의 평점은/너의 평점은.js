const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const gradeMap = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0,
};

let totalCredit = 0;
let totalScore = 0;

for(const line of input){
    const [subject, credit, grade] = line.split(' ');
    
    if(grade !== 'P'){
        const score = gradeMap[grade];
        totalCredit += parseFloat(credit);
        totalScore += parseFloat(credit) * score;
    }
}

const answer = totalScore / totalCredit;

console.log(answer.toFixed(6));
