T = int(input())

for tc in range(1,T+1):
	N, K = map(int, input().split())
	board = [list(map(int, input().split())) for _ in range(N)]
	cnt = 0
    
	for i in range(N):
		length = 0
		for j in range(N):
			if board[i][j] == 1:
				length += 1
			if board[i][j] == 0 or j == N-1:
				if length == K:
					cnt += 1
				length = 0

	for j in range(N):
		length = 0
		for i in range(N):
			if board[i][j] == 1:
				length += 1
			if board[i][j] == 0 or i == N-1:
				if length == K:
					cnt += 1
				length = 0
	print(f"#{tc} {cnt}")
			