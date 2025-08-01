import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

n = int(input())
graph = [[]for _ in range(n+1)]

for _ in range(n-1):
    a,b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

parent = [0]*(n+1)

def dfs(x):
    for nxt in graph[x]:
        if parent[nxt] == 0:
            parent[nxt]=x
            dfs(nxt)

dfs(1)

for i in range(2,n+1):
    print(parent[i])
