function solution(n, k, cmd) {
  // 🔹 각 행의 '위'와 '아래'를 기록할 배열
  const prev = Array(n);
  const next = Array(n);
  const alive = Array(n).fill(true); // true = 존재, false = 삭제됨
  const stack = []; // 삭제 기록용 스택

  // 🔹 prev / next 초기화
  for (let i = 0; i < n; i++) {
    prev[i] = i - 1;                 // 윗줄 인덱스
    next[i] = (i === n - 1) ? -1 : i + 1; // 아랫줄 인덱스
  }

  let cur = k; // 현재 선택된 행의 인덱스

  // 🔹 명령어 하나씩 처리
  for (let command of cmd) {
    const [cmdType, x] = command.split(' ');

    if (cmdType === 'U') {
      // ⬆ 위로 x칸 이동
      let cnt = Number(x);
      while (cnt-- > 0) cur = prev[cur];

    } else if (cmdType === 'D') {
      // ⬇ 아래로 x칸 이동
      let cnt = Number(x);
      while (cnt-- > 0) cur = next[cur];

    } else if (cmdType === 'C') {
      // ❌ 현재 행 삭제
      stack.push(cur);   // 삭제된 행 번호 저장
      alive[cur] = false;

      // 위, 아래 연결 재조정
      if (prev[cur] !== -1) next[prev[cur]] = next[cur];
      if (next[cur] !== -1) prev[next[cur]] = prev[cur];

      // 커서 이동 (아래가 있으면 아래로, 없으면 위로)
      cur = (next[cur] !== -1) ? next[cur] : prev[cur];

    } else if (cmdType === 'Z') {
      // 🔁 가장 최근 삭제 복구
      const restore = stack.pop();
      alive[restore] = true;

      // 위아래 관계 복원
      const p = prev[restore];
      const n = next[restore];

      if (p !== -1) next[p] = restore;
      if (n !== -1) prev[n] = restore;
    }
  }

  // 🔹 결과 문자열 만들기
  return alive.map(v => (v ? 'O' : 'X')).join('');
}
