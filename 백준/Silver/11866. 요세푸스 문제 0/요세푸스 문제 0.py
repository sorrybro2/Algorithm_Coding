# n : 사람 수, k : k번째 샛끼 제거
# k번째 제거 -> 제거된 곳으로 부터 k번째 제거 -> (반복)
# 제거된 k번째들을 순서대로 나열

from collections import deque
n, k = map(int,input().split())

q = deque(range(1, n+1))
ans = []

while q:
    q.rotate(-(k-1))
    ans.append(q.popleft())

print(f"<{', '.join(map(str, ans))}>")
