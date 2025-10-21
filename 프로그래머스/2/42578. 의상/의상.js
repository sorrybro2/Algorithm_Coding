function solution(clothes) {
    var answer = 1;
    
    let counts = {};
    for(const [name, type] of clothes){
        if(counts[type]){
            counts[type] += 1;
        }else{
            counts[type] = 1;
        }
    }
    
    for(const type in counts){
        answer *= counts[type] + 1;
    }
    answer -= 1;
    
    return answer;
}