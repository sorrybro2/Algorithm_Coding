n = int(input())
k = int(input())

if n-k <= 60:
    ans = n * 1500
else:
    ans = (60+k) * 1500 + (n-(60+k)) * 3000

print(ans)