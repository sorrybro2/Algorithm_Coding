const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if(a==b&&b==c){
    console.log(10000+1000*b);
}else if(a==b||b==c||a==c){
   if(a==b){
       console.log(1000+100*a);
   }else{
       console.log(1000+100*c);
   }
}else{
    console.log(Math.max(a,b,c)*100);
}