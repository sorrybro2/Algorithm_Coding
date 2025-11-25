n = int(input())
ans = 0

def digit_sum(x):
    total = x
    while(x>0):
        rem = x%10
        total += rem
        x = x//10
    return total

max_l = 9*len(str(n))
for i in range(max_l, -1, -1):
    if digit_sum(n-i) == n:
        ans = n-i
        break

print(ans)