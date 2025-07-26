import sys
from collections import deque
input = sys.stdin.readline

n,m = map(int,input().split())
graph = [[]for _ in range(n+1)]
visited = [False]*(n+1)
cnt=0

for _ in range(m):
    u,v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

for i in range(1, n+1):
    graph[i].sort()

def bfs(x):
    queue = deque([x])
    visited[x] = True
    while queue:
        node = queue.popleft()
        for nxt in graph[node]:
            if not visited[nxt]:
                visited[nxt] = True
                queue.append(nxt)

for i in range(1,n+1):
    if not visited[i]:
        bfs(i)
        cnt += 1

print(cnt)