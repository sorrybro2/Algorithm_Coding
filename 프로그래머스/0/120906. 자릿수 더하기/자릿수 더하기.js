function solution(n) {
    let answer = 0;
    for(const i of String(n)){
        answer += Number(i);
    }
    return answer
}