function solution(s1, s2) {
    const ans_arr = s2.filter(item => s1.includes(item))
    return ans_arr.length;
}