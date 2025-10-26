function solution(my_string) {
    var answer = my_string.split('').map(char => char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
    return answer;
}