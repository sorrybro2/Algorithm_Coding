function solution(order) {
    var answer = 0;
    order = String(order);
    for(const n of order){
        if(n>0 && n%3==0){
            answer +=1;
        }
    }
    return answer;
}