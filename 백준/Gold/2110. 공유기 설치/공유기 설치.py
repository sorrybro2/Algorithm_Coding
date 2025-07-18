n, c = map(int,input().split())
arr = []
for i in range(n):
    arr.append(int(input()))

arr.sort()
left = 1
right = arr[-1]-arr[0]
ans = 0

while left <= right:
    mid = (left+right)//2
    cnt = 1
    current=arr[0]

    for i in range(1, n):
        if arr[i] >= current+mid:
            current = arr[i]
            cnt += 1

    if cnt >= c:
        ans = mid
        left = mid + 1
    else :
        right = mid - 1

print(ans)
