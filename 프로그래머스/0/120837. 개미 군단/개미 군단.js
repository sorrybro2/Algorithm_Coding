function solution(hp) {
    let answer = 0;
    answer += Math.trunc(hp/5);
    hp %= 5;
    if(hp){
        answer += Math.trunc(hp/3);
        hp %= 3;
    }
    if(hp){
        answer += hp;
    }
    
    return answer;
}