T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    board = [[0]*N for _ in range(N)]

    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    idx = 0

    x, y = 0, 0
    num = 1

    for _ in range(N*N):
        board[x][y] = num
        nx = x + dx[idx]
        ny = y + dy[idx]

        if 0 <= nx < N and 0 <= ny < N and board[nx][ny] == 0:
            x, y = nx, ny
        else:
            idx = (idx + 1) % 4
            x, y = x + dx[idx], y + dy[idx]

        num += 1

    print(f"#{test_case}")
    for row in board:
        print(' '.join(map(str, row)))