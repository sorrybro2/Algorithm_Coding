T = int(input())
for tc in range(1, T+1):
	N, M = map(int, input().split())
	board = [list(map(int, input().split())) for _ in range(N)]
	max_catch = 0
	for i in range(N-M+1):
		for j in range(N-M+1):
			fly = 0
			for k in range(i, i+M):
				for l in range(j, j+M):
					fly += board[k][l]
			if max_catch < fly:
				max_catch = fly
	print(f"#{tc} {max_catch}")