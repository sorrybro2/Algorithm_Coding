function solution(numbers) {
    const arr = numbers.sort((a,b)=>b-a)
    var answer = arr[0]*arr[1];
    
    return answer;
}