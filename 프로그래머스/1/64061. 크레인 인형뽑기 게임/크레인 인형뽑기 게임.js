function solution(board, moves) {
    let stack = [];
    let answer = [];
    for(let move of moves){
        move = move - 1;
        for(let i = 0; i < board.length; i++){
            if(board[i][move] !== 0){     
                stack.push(board[i][move]);
                
                isSame(stack, answer);
                
                board[i][move] = 0;
                
                break;
            }
        }
    }
    return answer.length;
}

function isSame(stack, answer){
    while(stack.length >= 2 && stack[stack.length-1]===stack[stack.length-2]){
        const a1 = stack.pop();
        const a2 = stack.pop();
        
        answer.push(a1);
        answer.push(a2);
    }
    return stack, answer;
}
