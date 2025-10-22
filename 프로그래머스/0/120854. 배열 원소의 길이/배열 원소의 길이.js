function solution(strlist) {
    var answer = [];
    for(const word of strlist){
        answer.push(word.length);
    }
    return answer;
}