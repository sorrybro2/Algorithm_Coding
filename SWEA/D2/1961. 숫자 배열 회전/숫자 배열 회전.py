T = int(input())

for tc in range(1, T+1):
	n = int(input())
	board = [list(map(int, input().split())) for _ in range(n)]
	ans = [[""] * 3 for _ in range(n)]
    
	for i in range(n):
		for j in range(n-1, -1, -1):
			ans[i][0] += str(board[j][i])

	for i in range(n-1, -1, -1):
		for j in range(n-1, -1, -1):
			ans[n-(i+1)][1] += str(board[i][j])

	for i in range(n-1, -1, -1):
		for j in range(n):
			ans[n-(i+1)][2] += str(board[j][i])


	print(f"#{tc}")
	for row in ans:
		print(' '.join(row))