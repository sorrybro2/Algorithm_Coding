import sys
import heapq
input = sys.stdin.readline

v, e = map(int, input().split())
graph = [[]for _ in range(v+1)]

for _ in range(e):
    a,b,cost = map(int,input().split())
    graph[a].append((cost, b))
    graph[b].append((cost, a))

visited = [False]*(v+1)
min_heap=[(0,1)]
cnt = 0
ans = 0

while cnt < v and min_heap:
    cost, node = heapq.heappop(min_heap)

    if visited[node]:
        continue

    visited[node]=True
    cnt += 1
    ans += cost

    for nxt_cost, nxt_node in graph[node]:
        if not visited[nxt_node]:
            heapq.heappush(min_heap, (nxt_cost, nxt_node))

print(ans)