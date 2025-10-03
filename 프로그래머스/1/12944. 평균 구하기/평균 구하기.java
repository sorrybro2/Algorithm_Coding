// 평균 구하기
class Solution {
    public double solution(int[] arr) {
        double answer = 0;
        double hap = 0;
        for(int i = 0; i < arr.length; i++){
            hap += arr[i];
        }
        answer = hap/arr.length;
        return answer;
    }
}