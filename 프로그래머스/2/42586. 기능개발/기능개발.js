function solution(progresses, speeds) {
    
    let answer = [];
    let workdays = [];
    let count = 1;
    
    for(let i = 0; i < progresses.length; i++){
        const r = 100 - progresses[i];
        const workday = r / speeds[i];
        workdays.push(Math.ceil(workday));
    }
    
    let maxDay = workdays[0];
    
    for(let i = 1; i < workdays.length; i++){
        if(maxDay >= workdays[i]){
            count++;
        }else{
            answer.push(count);
            count = 1;
            maxDay = workdays[i];
        }
    }
    answer.push(count);
    
    return answer;
}