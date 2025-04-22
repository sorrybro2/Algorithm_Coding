const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const word = input.toUpperCase(); 
// 출력이 대문자니까 아스키코드를 이용하기 위해 모든 문자 대문자로 통일

let alphabet = Array(26).fill(0);
// 제일 많이 이루어진 알파벳을 찾기 위한 배열 추가

for(let i = 0; i < word.length; i++){
	const index = word.charCodeAt(i)-65; // A의 아스키코드 값이 65이므로 -65함
	alphabet[index]++; // 해당 알파벳에 1씩 횟수 추가
}

const max = Math.max(...alphabet); // 스프레드 연산자를 이용해 배열의 전체를 가지고 와 최댓값 구함

let count = 0; //최댓값이 더 나오는걸 체크하기 위한 변수
let maxIndex = 0; //최댓값을 출력할 때 사용할 변수

for(let i =0; i < alphabet.length; i++){
	if(max == alphabet[i]){
    	count++; //1씩 추가해서 여러개의 최댓값이 있는지 확인
      	maxIndex = i //최댓값 인덱스
    }
}

if(count > 1){
	console.log('?');
}else{
	console.log(String.fromCharCode(maxIndex+65)); // 대문자로 바꿔줘야 하므로 다시 65 더해야함!
}