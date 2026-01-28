const fs = require('fs');

// 백준 제출 시 입력 경로는 '/dev/stdin' 입니다.
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

// 등수별 [푼 문제 수, 페널티] 데이터 저장
// 인덱스 0이 1등이 되도록 순서대로 저장했습니다.
const data = [
    [12, 1600], // 1등
    [11, 894],  // 2등
    [11, 1327], // 3등
    [10, 1311], // 4등
    [9, 1004],  // 5등
    [9, 1178],  // 6등
    [9, 1357],  // 7등
    [8, 837],   // 8등
    [7, 1055],  // 9등
    [6, 556],   // 10등
    [6, 773]    // 11등
];

// 입력받은 등수(n)에 해당하는 데이터 출력
// 배열은 0부터 시작하므로 n-1 인덱스를 참조합니다.
const result = data[n - 1];

console.log(`${result[0]} ${result[1]}`);