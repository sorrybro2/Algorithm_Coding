# 값 정렬을 위해서 왼쪽[0] 오른쪽[0]을 바꿔치기 할때
# 왼쪽 오른쪽 길이를 맞출때

import sys
import heapq
input = sys.stdin.readline
n = int(input())

left = []
right = []

for _ in range(n):
    x = int(input())
    heapq.heappush(left, -x)
    if right and -left[0] > right[0]:
        left_num = -heapq.heappop(left)
        right_num = -heapq.heappop(right)
        heapq.heappush(left, right_num)
        heapq.heappush(right, left_num)

    if len(left) > len(right)+1:
        heapq.heappush(right, -heapq.heappop(left))
      
    print(-left[0])