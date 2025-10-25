function solution(my_string) {
    var answer = 0;
    const only_num = my_string.split(/[a-zA-Z]/).join('').split('').map(Number);
    for(const num of only_num){
        answer += num;
    }
    return answer;
}