n, m = map(int, input().split())
jack = list(map(int, input().split()))
ans = 0
min_diff = 999999

for i in range(0, len(jack)-2):
    for j in range(i+1, len(jack)-1):
        for k in range(j+1, len(jack)):
            total = jack[i] + jack[j] + jack[k]
            if total <= m:
                if min_diff > abs(m-total):
                    min_diff = abs(m-total)
                    ans = total
                
print(ans)