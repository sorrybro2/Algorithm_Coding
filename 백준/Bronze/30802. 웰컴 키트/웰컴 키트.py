import math

n = int(input())
shirts = list(map(int, input().split()))
t, p = map(int, input().split())

ans1 = 0

for i in shirts:
    ans1 += math.ceil(i/t)

ans2 = n//p
ans3 = n%p

print(f"{ans1}")
print(f"{ans2} {ans3}")