import sys
input = sys.stdin.readline

n = int(input())
place = list(map(int, input().strip()))  # 정수 리스트
graph = [[] for _ in range(n+1)]

for _ in range(n-1):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * (n+1)
cnt = 0

def dfs(x):
    visited[x] = True
    indoor_count = 0
    for nxt in graph[x]:
        if place[nxt-1] == 1:
            indoor_count += 1
        elif not visited[nxt]:
            indoor_count += dfs(nxt)
    return indoor_count

# 실외(0) 노드들만 DFS 탐색
for i in range(1, n+1):
    if place[i-1] == 0 and not visited[i]:
        c = dfs(i)       # 해당 컴포넌트의 실내 노드 수
        cnt += c * (c - 1)  # 조합 계산

# 인접한 실내 노드끼리 직접 연결된 경우도 더해줌
for i in range(1, n+1):
    if place[i-1] == 1:
        for nxt in graph[i]:
            if place[nxt-1] == 1:
                cnt += 1

print(cnt)