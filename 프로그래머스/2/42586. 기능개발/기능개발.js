function solution(progresses, speeds) {
    
    let remindDay = [];
    let answer = [];
    
    for(let i = 0; i < progresses.length; i++){
        const left = 100 - progresses[i];
        const leftday = Math.ceil(left / speeds[i]);
        remindDay.push(leftday);
    }
    
    let max = remindDay[0];
    let count = 1;
    
    for(let i = 1; i < remindDay.length; i++){
        if(remindDay[i] <= max){
            count += 1;
        }else{
            answer.push(count);
            max = remindDay[i];
            count = 1;
        }
    } 
    answer.push(count);
    return answer;
}