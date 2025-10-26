function solution(num, k) {
    
    // for(..of..) 은 문자열만 다룬다!
    num = String(num);
    let answer = []
    for(const n of num){
        answer.push(n);
        if(n == k){
            return answer.length;
        }
    }
    return -1
}