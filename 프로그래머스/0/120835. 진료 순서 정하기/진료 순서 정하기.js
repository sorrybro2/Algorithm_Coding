function solution(emergency) {
    
    const original = [...emergency];

    const sorted = [...emergency].sort((a,b) => b-a);
    
    const answer = original.map(v => sorted.indexOf(v)+1);
    
    return answer;
}