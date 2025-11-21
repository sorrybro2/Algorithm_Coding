T = int(input())
for tc in range(1, T+1):
	n = int(input())
	
	dx = [0, 1, 0, -1]
	dy = [1, 0, -1, 0]
	idx = 0
	x, y = 0, 0

	board = [[0]*n for _ in range(n)]
	
	for i in range(1, n*n+1):
		board[x][y] = i
		nx, ny = x + dx[idx], y + dy[idx]
		if 0 <= nx < n and 0 <= ny < n and board[nx][ny] == 0:
			x, y = nx, ny
		else:
			idx = (idx+1) % 4
			x, y = x + dx[idx], y + dy[idx]
	
	print(f"#{tc}")
	for row in board:
		print(' '.join(map(str, row)))