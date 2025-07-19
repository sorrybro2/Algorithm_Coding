import sys
input = sys.stdin.readline

n = int(input())
t_length = list(map(int,input().split()))
ans = [0]*n

stack = []

for i in range(n):
    cur_t = t_length[i]

    while stack and stack[-1][1] < cur_t:
        stack.pop()
    
    if stack:
        ans[i] = stack[-1][0]
    else:
        ans[i] = 0
    
    stack.append((i+1, cur_t))

print(' '.join(map(str, ans)))