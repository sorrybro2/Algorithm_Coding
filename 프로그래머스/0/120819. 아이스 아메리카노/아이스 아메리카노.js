function solution(money) {
    var answer = [];
    const coffee_cnt = Math.floor(money/5500);
    const change = money - 5500 * coffee_cnt;
    answer.push(coffee_cnt);
    answer.push(change);
    return answer;
}