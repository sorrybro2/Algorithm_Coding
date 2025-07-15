from collections import deque

n, m = map(int, input().split())  # 행, 열 입력
board = [list(map(int, input().split())) for _ in range(n)]  # 2차원 보드 입력
vis = [[False]*m for _ in range(n)]  # 방문 여부 배열

dx = [1, 0, -1, 0]  # 상하좌우
dy = [0, 1, 0, -1]

num = 0  # 그림의 수
mx = 0   # 가장 넓은 그림의 넓이

for i in range(n):
    for j in range(m):
        if board[i][j] == 0 or vis[i][j]:  # 0이거나 이미 방문했으면 넘어감
            continue

        # 새로운 그림 발견!
        num += 1
        q = deque()
        vis[i][j] = True
        q.append((i, j))
        area = 0

        while q:
            x, y = q.popleft()
            area += 1  # 큐에서 꺼낼 때마다 넓이 1 증가

            for dir in range(4):
                nx = x + dx[dir]
                ny = y + dy[dir]

                if nx < 0 or nx >= n or ny < 0 or ny >= m:
                    continue
                if vis[nx][ny] or board[nx][ny] != 1:
                    continue

                vis[nx][ny] = True
                q.append((nx, ny))

        mx = max(mx, area)

print(num)
print(mx)
