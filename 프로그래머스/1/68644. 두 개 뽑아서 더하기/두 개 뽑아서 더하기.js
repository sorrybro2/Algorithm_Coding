function solution(numbers) {
    var resultBefore = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j];
            resultBefore.push(sum);
        }       
    }
    const answer = [...new Set(resultBefore)];
    answer.sort((a,b)=>a-b);
    return answer;
}