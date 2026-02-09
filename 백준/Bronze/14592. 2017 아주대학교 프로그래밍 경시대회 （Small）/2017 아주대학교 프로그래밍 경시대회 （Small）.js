const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const participant = [];

for(let i = 1; i <= n; i++){
    // 문자열을 숫자로 변환해서 가져옵니다.
    const [total, cnt, time] = input[i].split(' ').map(Number);
    
    // 점수, 횟수, 시간, 그리고 참가자 번호(id)를 객체로 묶어 배열에 넣습니다.
    participant.push({ total, cnt, time, id: i });
}

// 정렬 로직 (a: 비교할 앞사람, b: 비교할 뒷사람)
participant.sort((a, b) => {
    // 1. 점수가 다르면 높은 점수가 먼저 (내림차순)
    if (a.total !== b.total) {
        return b.total - a.total;
    }
    
    // 2. 점수가 같고 횟수가 다르면 적은 횟수가 먼저 (오름차순)
    if (a.cnt !== b.cnt) {
        return a.cnt - b.cnt;
    }
    
    // 3. 점수와 횟수가 모두 같으면 빠른 시간이 먼저 (오름차순)
    return a.time - b.time;
});

// 정렬 후 맨 앞에 있는(0번째) 사람의 번호를 출력
console.log(participant[0].id);