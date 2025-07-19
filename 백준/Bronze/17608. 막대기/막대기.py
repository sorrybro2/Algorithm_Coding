import sys
input = sys.stdin.readline

n = int(input())
stack = []
max_length = 0
ans = 0

for _ in range(n):
    stack.append(int(input().strip()))

#보는 방향 기준으로 인덱스 방향을 바꿔
stack = stack[::-1]
for i in range(n):
    if stack[i] > max_length:
        ans +=1
        max_length=stack[i]

print(ans)