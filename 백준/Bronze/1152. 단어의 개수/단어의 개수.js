const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim() //띄어쓰기도 한 단어로 이용해야하므로 trim()을 사용해서 한단어로 묶기!

if(input == ''){//이 쉐끼들 띄어쓰기만 하는 경우도 넣어놔서 빈 문장인 경우도 조건문으로 해줘야함
	console.log(0);
}else{
	const words = input.split(/\s/); //문제에서 공백이 연속으로 나오는 경우는 없다고 해서 +는 안씀 \s가 공백을 나타냄
  	console.log(words.length);
}