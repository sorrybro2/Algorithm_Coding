function solution(n) {
    answer = 0;
    for(let i = 4; i <= n; i++){
        let tri_bool = true;
        for(let j = 2; j < i; j++){
            if(i%j==0 && tri_bool){
                answer += 1;
                tri_bool = false;
            }
        }
    }
    return answer;
}