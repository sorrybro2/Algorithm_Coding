import sys
from collections import deque
input = sys.stdin.readline

n,m,k,x = map(int, input().split())
graph = [[]for _ in range(n+1)]

for _ in range(m):
    a,b = map(int, input().split())
    graph[a].append(b)

dist = [-1]*(n+1)
dist[x] = 0 # 시작부분 0으로 초기화~

def bfs(a):
    queue = deque([a])

    while queue:
        cur = queue.popleft()
        for nxt in graph[cur]:
            if dist[nxt]==-1:
                dist[nxt]=dist[cur]+1
                queue.append(nxt)

bfs(x)

# k값인 인덱스를 ans 배열에 넣음

ans = [i for i in range(1,n+1) if dist[i]==k]

if ans:
    print('\n'.join(map(str, ans)))
else:
    print(-1)