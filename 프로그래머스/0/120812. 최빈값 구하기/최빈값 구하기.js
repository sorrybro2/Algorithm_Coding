function solution(array) {
    let count = Array(1000).fill(0);
    for(let num of array) count[num]++;
    
    const max = Math.max(...count);
    const maxlength = count.filter(x=>x===max).length;
    
    if(maxlength > 1) return -1;
    return count.indexOf(max);
}