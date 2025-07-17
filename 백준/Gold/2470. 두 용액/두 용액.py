n = int(input())
water = list(map(int, input().split()))
water.sort()
min_hap = float('inf')

start = 0
end = n-1
ans = (water[start],water[end])

while start < end:
    hap = water[start] + water[end]

    if abs(hap) < min_hap :
        min_hap = abs(hap)
        ans = (water[start], water[end])

    if hap < 0:
        start += 1
    else:
        end -= 1

print(f"{ans[0]} {ans[1]}")