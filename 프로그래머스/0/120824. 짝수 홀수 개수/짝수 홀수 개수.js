function solution(num_list) {
    let obb = 0;
    let even = 0;
    for(const num of num_list){
        if(num%2==0 ? even += 1 : obb += 1);
    }
    let answer = []
    answer.push(even);
    answer.push(obb);
    
    return answer;
}