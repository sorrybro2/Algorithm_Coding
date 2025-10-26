function solution(age) {
    const alien_words = {
        '0' : 'a',
        '1' : 'b',
        '2' : 'c',
        '3' : 'd',
        '4' : 'e',
        '5' : 'f',
        '6' : 'g',
        '7' : 'h',
        '8' : 'i',
        '9' : 'j',
    }
    answer = '';
    age = String(age);
    for(const str of age){
        answer += alien_words[str]; 
    }
    return answer;
}