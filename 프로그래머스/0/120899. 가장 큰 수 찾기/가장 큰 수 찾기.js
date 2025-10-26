function solution(array) {
    var answer = [];
    const max = Math.max(...array);
    answer.push(max);
    const max_idx = array.indexOf(max);
    answer.push(max_idx);
    return answer;
}