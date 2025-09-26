function solution(N, stages) {
    var answer = [];
    
    // 반복문
    for(let i = 1; i <= N; i++){
        const fail = stages.filter(item => item==i).length;
        const stagelng = stages.length;
        
        const failRate = fail/stagelng;
        
        answer.push({stage : i, rate : failRate});
        
        stages = stages.filter(item => item != i);
    }
    
    answer.sort((a,b) => b.rate-a.rate);
    
    return answer.map(i => i.stage);
}