import sys
import heapq
input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b, costs = map(int, input().split())
    graph[a].append((b,costs))

start, end = map(int, input().split())

def dijkstra(x):
    dist = [float('inf')]*(n+1)
    dist[x] = 0
    pq = [(0,x)]

    while pq:
        cost, node = heapq.heappop(pq)

        if cost > dist[node]:# 이미 더 짧은 길이 있는데 굳이 할 필요가 없음
            continue

        for nxt,c in graph[node]:
            if cost + c < dist[nxt]:
                dist[nxt] = cost + c
                heapq.heappush(pq, (dist[nxt], nxt))
    return dist

dist = dijkstra(start)
print(dist[end])