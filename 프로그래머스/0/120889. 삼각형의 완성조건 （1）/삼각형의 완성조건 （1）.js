function solution(sides) {
    let arr = sides.sort((a,b)=>b-a);
    var answer = arr[0] < arr[1]+arr[2] ? 1 : 2;
    return answer;
}