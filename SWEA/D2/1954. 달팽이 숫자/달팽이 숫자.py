T = int(input())

for tc in range(1,T+1):
	dx = [0, 1, 0, -1]
	dy = [1, 0, -1, 0]
    
	idx = 0
	num = 1
    
	x, y = 0, 0
    
	N = int(input())
	board = [[0]*N for _ in range(N)]
    
	for i in range(N*N):
		board[x][y] = num
		nx, ny = x+dx[idx], y+dy[idx]
		if 0 <= nx < N and 0 <= ny < N and board[nx][ny] == 0:
			x, y = nx, ny
		else:
			idx = (idx+1)%4
			x, y = x+dx[idx], y+dy[idx]
		num += 1

	print(f"#{tc}")
	for row in board:
		print(' '.join(map(str, row)))
            