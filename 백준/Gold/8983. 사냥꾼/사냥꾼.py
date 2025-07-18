m,n,l = map(int,input().split()) # m = 사냥꾼 수, n = 동물 수, l = 사정거리
hunt_posi = list(map(int, input().split()))
hunt_posi.sort()
target = [list(map(int,input().split()))for _ in range(n)]

ans = 0

for a, b in target:
    start = 0
    end = len(hunt_posi)-1
    while start <= end:
        mid = (start+end)//2
        min = -l+a+b
        max = l+a-b
        if min <= hunt_posi[mid] <= max:
            ans += 1
            break
        elif hunt_posi[mid] < max:
            start = mid + 1
        else:
            end = mid - 1


print(ans)

