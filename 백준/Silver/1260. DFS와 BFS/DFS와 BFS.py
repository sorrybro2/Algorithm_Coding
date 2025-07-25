import sys
input = sys.stdin.readline
from collections import deque

n,m,v = map(int,input().split())

visited = [False]*(n+1)
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a,b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1,n+1):
    graph[i].sort()

def dfs(start):
    visited[start] = True
    print(start, end=' ')

    for nxt in graph[start]:
        if not visited[nxt]:
            dfs(nxt)

def bfs(start):
    queue = deque([start])
    visited = [False]*(n+1)
    visited[start] = True
    
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