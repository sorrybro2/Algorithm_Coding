#indegree로 어느 정도 깊이에 있는지 파악 후, 그것을 이용하여 결과를 도출한다! - 위상 정렬이니까
import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[]for _ in range(n+1)]
indegree = [0]*(n+1)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    indegree[b] += 1

q = deque()
for i in range(1, n+1):
    if indegree[i]==0:
        q.append(i)

result = []

while q:
    now = q.popleft()
    result.append(now)
    for nxt in graph[now]:
        indegree[nxt] -= 1
        if indegree[nxt] == 0:
            q.append(nxt)

print(*result)