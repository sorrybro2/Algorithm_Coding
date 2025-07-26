import sys
from collections import deque
input = sys.stdin.readline

n, m, v = map(int,input().split())

graph = [[] for _ in range(n+1)]
visited = [False]*(n+1)

for _ in range(m):
    a,b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1,n+1):
    graph[i].sort()

def dfs(x):
    visited[x] = True
    print(x, end=' ')
    for nxt in graph[x]:
        if not visited[nxt]:
            dfs(nxt)


def bfs(x):
    queue = deque([x])
    visited = [False]*(n+1)
    visited[x] = True
    
    while queue:
        node = queue.popleft()
        print(node, end=' ')

        for nxt in graph[node]:
            if not visited[nxt]:
                visited[nxt] = True
                queue.append(nxt)

dfs(v)
print()
bfs(v)