function solution(my_string) {
    
    // 스프레드 연산자를 사용하면 ["j","a","r","o","n"]으로 분리되므로
    // reverse() 함수를 통해 거꾸로 뒤집은 문자열을 만들고 join('')으로 합침!
    var answer = [...my_string].reverse().join('');
    
    return answer;
}