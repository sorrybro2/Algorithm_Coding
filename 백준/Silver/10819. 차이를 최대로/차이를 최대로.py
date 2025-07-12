from itertools import permutations

n = int(input())
arr = list(map(int,input().split()))

max_value = 0

for perm in permutations(arr):
    total = 0
    for i in range(n-1):
        total += abs(perm[i]-perm[i+1])
    max_value = max(total, max_value)

print(max_value)


