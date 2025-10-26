function solution(numbers, direction) {
    let answer = []
    if(direction == "right"){
        const [switch_remain] = numbers.splice(numbers.length-1);
        answer.push(switch_remain);
        for(const n of numbers){
            answer.push(n);
        }
    }else if(direction == "left"){
        const first = numbers[0];
        const switch_remain = numbers.splice(1,numbers.length-1);
        switch_remain.push(first);
        return switch_remain;
    }
    return answer;
}