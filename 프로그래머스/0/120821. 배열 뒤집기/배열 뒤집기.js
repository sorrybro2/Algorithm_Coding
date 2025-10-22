function solution(num_list) {
    var answer = [];
    for(let num = num_list.length-1; num >= 0; num--){
        answer.push(num_list[num]);
    }
    return answer;
}