from collections import deque

n = int(input())
board = [list(map(int, input().split()))for _ in range(n)]

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def bfs(x, y, visited, rain):
    q = deque()
    q.append((x,y))
    visited[x][y] = True

    while q:
        x, y = q.popleft()
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
            if 0 <= nx < n and 0 <=ny<n:
                if not visited[nx][ny] and board[nx][ny] > rain:
                    visited[nx][ny] = True
                    q.append((nx,ny))

max_safe=0

for rain in range(0, max(map(max,board))+1):
    visited = [[False]*n for _ in range(n)]
    count = 0
    for i in range(n):
        for j in range(n):
            if not visited[i][j] and board[i][j] > rain:
                bfs(i, j, visited, rain)
                count += 1
    max_safe = max(max_safe, count)

print(max_safe)