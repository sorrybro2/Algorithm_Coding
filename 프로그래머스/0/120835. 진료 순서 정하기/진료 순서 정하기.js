function solution(emergency) {
    // 원래 배열과 내림차순을 해놓은 배열을 만들고
    // 원래 배열 기준으로 내림차순 배열의 인덱스 + 1 값을 차례로 출력하면 끝
    
    const original = [...emergency];
    
    const sorted = [...emergency].sort((a,b) => b-a);
    
    return original.map(v => sorted.indexOf(v)+1);
}