function solution(s){
    // 스택 생성
    let stack = [];
    
    // 입력한 괄호 한 글자씩 반복문
    for(const c of s){
        
        // 만약에 열린 괄호면 스택에 "(" 삽입
        if(c == "("){
            stack.push("(");
        }else{ // 만약 닫힌 괄호면 아무 것도 없을 때 닫힌 괄호가 나오면 false, 아니면 pop
            if(stack.length == 0){
                return false;
            }else{
                stack.pop();
            }
        }
    }
    return stack.length == 0; // 길이가 0이면 true, 아니면 짝이 다르므로 false
}