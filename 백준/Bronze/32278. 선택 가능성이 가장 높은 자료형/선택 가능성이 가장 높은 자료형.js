const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. 입력값을 크기 제한이 없는 정수형인 BigInt로 변환합니다.
const N = BigInt(input);

// 2. 값의 범위를 확인합니다. (비교하는 상수 뒤에도 n을 붙여 BigInt 타입으로 맞춰주어야 합니다.)
if (N >= -32768n && N <= 32767n) {
    console.log("short");
} else if (N >= -2147483648n && N <= 2147483647n) {
    console.log("int");
} else {
    console.log("long long");
}