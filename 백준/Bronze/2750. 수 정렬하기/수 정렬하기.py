N = int(input())

ans = [0]*N

for i in range(N):
    n = int(input())
    ans[i] += n

ans.sort()

for i in range(N):
    print(ans[i])