function solution(i, j, k) {
    var answer = 0;
    
    for(let x = i; x<=j; x++){
        for(const n of String(x)){
            if(n == k){
                answer += 1;
            }
        }
    }

    return answer;
}