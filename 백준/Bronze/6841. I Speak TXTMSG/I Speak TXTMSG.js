const fs = require('fs');

// 1. 번역용 사전 데이터 구성
const translations = {
    "CU": "see you",
    ":-)": "I’m happy",
    ":-(": "I’m unhappy",
    ";-)": "wink",
    ":-P": "stick out my tongue",
    "(~.~)": "sleepy",
    "TA": "totally awesome",
    "CCC": "Canadian Computing Competition",
    "CUZ": "because",
    "TY": "thank-you",
    "YW": "you’re welcome",
    "TTYL": "talk to you later"
};

// 2. 표준 입력으로부터 데이터를 읽어오기
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    // 공백 및 줄바꿈 문자 제거
    const line = input[i].trim();
    
    // 빈 줄은 무시
    if (line === "") continue;

    // 3. 번역 및 출력
    // 사전에 해당 키가 있으면 번역문 출력, 없으면 입력값 그대로 출력
    if (translations.hasOwnProperty(line)) {
        console.log(translations[line]);
    } else {
        console.log(line);
    }

    // 4. TTYL 입력 시 종료
    if (line === "TTYL") {
        break;
    }
}