function isPair(s){
    let stack = [];
    for(const c of s){
        if(c == "["){
            stack.push("[");
        }
        else if(c == "("){
            stack.push("(");
        }
        else if(c == "{"){
            stack.push("{");
        }
        else if(c == "]"){
            if (stack.length == 0 | !stack.includes("[")){
                return 0;
            }else{
                stack.pop();
            }
        }
        else if(c == ")"){
            if (stack.length == 0 | !stack.includes("(")){
                return 0;
            }else{
                stack.pop();
            }
        }
        else if(c == "}"){
            if (stack.length == 0 | !stack.includes("{")){
                return 0;
            }else{
                stack.pop();
            }
        }
    }
    return stack.length == 0;
}


function solution(s) {
    let rotate = [];
    let answer = 0;
    for(let i = 0; i < s.length; i++){
        rotate = s.slice(i) + s.slice(0,i)
        answer += isPair(rotate);
    }
    
    return answer;
}