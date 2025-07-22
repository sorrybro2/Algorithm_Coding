import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
min = float('inf')
ans = []
arr.sort()

start = 0
end = n-1

while start<end:
    hap = arr[start] + arr[end]
    if abs(hap) < abs(min):
        min = hap
        ans = arr[start],arr[end]
    
    if hap < 0:
        start += 1
    else:
        end -= 1

print(ans[0],ans[1])