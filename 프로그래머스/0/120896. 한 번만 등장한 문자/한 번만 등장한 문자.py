def solution(s):
    alpha_num = {};
    
    for c in s : 
        if c not in alpha_num :
            alpha_num[c] = 1
        else :
            alpha_num[c] += 1
    
    answer = ''.join(sorted([key for key, value in alpha_num.items() if value == 1]))

    return answer