function solution(numbers) {
    let max = -Infinity;

    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            const mult = numbers[i] * numbers[j];
            if(max < mult){
                max = mult;
            }
        }
    }
    return max
}