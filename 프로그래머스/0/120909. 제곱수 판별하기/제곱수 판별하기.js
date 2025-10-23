function solution(n) {
    var answer = Number.isInteger(Math.pow(n,1/2)) ? 1:2;
    return answer;
}