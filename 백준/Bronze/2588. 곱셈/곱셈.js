var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split('\n');

var A = parseInt(input[0]);
var B = parseInt(input[1]);

var first = A*(B%10);
var second = A*(((B%100)-(B%10))/10);
var third = A*((B-(B%100))/100);

console.log(first);
console.log(second);
console.log(third);
console.log(first + (second*10) + (third*100));