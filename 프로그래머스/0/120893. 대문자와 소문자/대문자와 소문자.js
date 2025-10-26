function solution(my_string) {
    let answer = [...my_string]
                .map(ch => ch == ch.toUpperCase() 
                     ? ch.toLowerCase() : ch.toUpperCase())
                .join('');
    return answer;
}