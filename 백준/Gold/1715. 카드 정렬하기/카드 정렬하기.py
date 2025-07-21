import sys
import heapq
input = sys.stdin.readline

n = int(input())
arr = []

for _ in range(n):
    heapq.heappush(arr, int(input()))

total = 0

while len(arr)>1:
    a = heapq.heappop(arr)
    b = heapq.heappop(arr)
    sum = a+b
    total += sum
    heapq.heappush(arr, sum)

print(total)