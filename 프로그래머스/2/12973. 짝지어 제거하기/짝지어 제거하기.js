function solution(s)
{
    // 문자열 넣는 스택 필요
    let stack = [];
    
    // 문자열 반복문
    for(const ch of s){
        // 스택에 뭐가 있고 스택 맨 끝과 맨 끝-1이 갔다면
        if(stack.length && stack[stack.length-1]==ch){
            // pop
            stack.pop();
        }else{
            // 조건에 맞지 않으면 문자열을 스택에 삽입
            stack.push(ch);
        }
    }
    // 참이면 1, 거짓은 0
    return stack.length === 0 ? 1 : 0;
}