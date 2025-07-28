import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n = int(input())
place = list(map(int, input().strip()))  # 0: 실외, 1: 실내

graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * (n+1)
answer = 0

# --- DFS로 실외 컴포넌트 탐색 후 인접 실내 노드 카운트 ---
def dfs(x):
    visited[x] = True
    indoor_count = 0
    for nxt in graph[x]:
        if place[nxt-1] == 1:          # 실내
            indoor_count += 1
        elif not visited[nxt]:         # 실외
            indoor_count += dfs(nxt)
    return indoor_count

# 1) 실외 컴포넌트마다 계산
for i in range(1, n+1):
    if place[i-1] == 0 and not visited[i]:
        c = dfs(i)
        answer += c * (c-1)  # 조합

# 2) 실내-실내 직접 연결 카운트
for i in range(1, n+1):
    if place[i-1] == 1:
        for nxt in graph[i]:
            if place[nxt-1] == 1:
                answer += 1

print(answer)
