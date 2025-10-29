function solution(my_string) {
    var answer = 0;
    const num = my_string.split(/[a-zA-Z]/).map(Number);
    for(let i = 0; i < num.length; i++){
        answer += num[i];
    }
    return answer;
}