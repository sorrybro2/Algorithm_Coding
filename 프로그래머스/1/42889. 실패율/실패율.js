function solution(N, stages) {
    var answer = [];
    
    // 실패율을 구하기 위한 반복문
    for(let i = 1; i <= N; i++){
        
        // 해당 스테이지에서의 실패 개수와 전체 개수를 파악 후 실패율 구함
        const failcnt = stages.filter(stage => stage == i).length;
        const stage = stages.length;
        const failRate = failcnt/stage;
        
        // 키와 값으로 넣음!
        answer.push({stage : i, rate : failRate});
        
        // i 스테이지는 빼줘야함
        stages = stages.filter(x => x != i);
    }
    
    // 실패율 기준 내림차순
    answer.sort((a,b) => b.rate - a.rate);
    
    // 답이 나와야하는데 stage만 나와야함
    return answer.map(item => item.stage);
}