const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

let cursor = 0;
const K = input[cursor++]; // 데이터 세트 개수

for (let i = 1; i <= K; i++) {
    const n = input[cursor++]; // 배의 수
    const s = input[cursor++]; // 속력 (마일/일)
    const d = input[cursor++]; // 남은 기한 (일)

    // d일 동안 배가 갈 수 있는 최대 거리
    const maxDistance = s * d;
    let totalDucats = 0;

    for (let j = 0; j < n; j++) {
        const dist = input[cursor++]; // 배의 거리
        const value = input[cursor++]; // 화물 가치

        // 배의 거리가 갈 수 있는 최대 거리 이하라면 도착 가능
        if (dist <= maxDistance) {
            totalDucats += value;
        }
    }

    console.log(`Data Set ${i}:`);
    console.log(totalDucats);
    console.log(""); // 각 세트 뒤에 빈 줄 출력
}