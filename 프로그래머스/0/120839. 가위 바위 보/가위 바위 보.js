function solution(rsp) {
    let answer = '';
    for(const word of rsp){
        if(word == 2){
            answer += 0;
        }else if(word == 0){
            answer += 5;
        }else{
            answer += 2;
        }
    }
    return answer;
}