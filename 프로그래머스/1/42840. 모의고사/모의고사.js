function solution(answers) {
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    let score = [0,0,0];
    
    for(const [index, num] of answers.entries()){
        for(const [i, pattern] of patterns.entries()){
            if(num == pattern[index % pattern.length])
                score[i] += 1;
        }
    }
    
    const maxScore = Math.max(...score);
    var answer = [];
    
    for(let i = 0; i < score.length; i++){
        if(score[i] == maxScore){
            answer.push(i+1);
        }
    }
    return answer;
}