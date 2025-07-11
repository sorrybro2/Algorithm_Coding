n = int(input())
nums = list(map(int, input().split()))

def is_sosu(x):
    if x < 2 :
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    return True

count = 0

for i in nums:
    if is_sosu(i):
        count += 1

print(count)