function solution(phone_book) {
    
    // 사전 순으로 오름차순임!
    phone_book.sort();
    
    // 전화번호부에 접두사 관계인 연락처가 없다면 true
    var answer = true;
    
    // 접두사 관계가 있을 시, false
    for(let i = 1; i < phone_book.length; i++){
        if(phone_book[i].startsWith(phone_book[i-1])){
            answer = false;
        }
    }
        
    return answer;
}