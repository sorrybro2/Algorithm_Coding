n, m = map(int, input().split())
trees = list(map(int, input().split()))

start = 0
end = max(trees)
ans = 0

while start <= end:
    mid = (start+end)//2
    total = 0
    
    for tree in trees:
        if tree-mid>0:
            total += tree-mid
    
    if total >= m:
        ans = mid
        start = mid + 1

    else:
        end = mid - 1

print(ans)