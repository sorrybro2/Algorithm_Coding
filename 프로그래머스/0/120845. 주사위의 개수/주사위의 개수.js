function solution(box, n) {
    let answer = 1;
    for(const len of box){
        answer *= Math.floor(len/n);
    }
    return answer;
}