function solution(arr1, arr2) {
    // arr1, arr2 행과 열 크기 구함
    const a1l = arr1.length;
    const a1m = arr1[0].length;
    const a2l = arr2.length;
    const a2m = arr2[0].length;
    
    // 답을 넣을 2차원 배열의 틀을 미리 만듦
    let answer = [];
    for(let i = 0; i < a1l; i++){
        answer.push(new Array(a2m).fill(0));
    }
    
    // i,j 정답의 행(arr1)과 열(arr2)을 반복문 돌려서 
    // 두 행렬을 곱해야하므로 arr1열도 k로 반복문 돌려야 함
    for(let i = 0; i < a1l; i++){
        for(let j = 0; j < a2m; j++){
            for (let k = 0; k < a1m; k++){
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return answer;
}