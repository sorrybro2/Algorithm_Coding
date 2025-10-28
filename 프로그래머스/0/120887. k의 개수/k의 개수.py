def solution(i, j, k):
    answer = 0
    
    for x in range(i, j+1):
        for n in str(x):
            if(n == str(k)):
                answer += 1
    
    return answer