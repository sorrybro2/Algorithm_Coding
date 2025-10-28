function solution(s) {
    let alpha_num = {};
    
    for(const c of s){
        if(alpha_num[c] == null){
            alpha_num[c] = 1;
        }else{
            alpha_num[c] += 1;  
        }
    }
    
    // 오브젝트 키를 가지고 오고싶을때!
    // Object.keys(해당 object이름).filter(key => alpha_num[key] == 1 조건)
    const answer = Object.keys(alpha_num).filter(key => alpha_num[key] == 1).sort().join('');
    
    return answer;
}