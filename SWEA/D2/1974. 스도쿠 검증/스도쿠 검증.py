T = int(input())
for tc in range(1, T+1):
	board = [list(map(int, input().split())) for _ in range(9)]
	check = [1,2,3,4,5,6,7,8,9]
	bool_ans = 1
    
	for i in range(9):
		row = []
		for j in range(9):
			row.append(board[i][j])
		row.sort()
		for n in range(9):
			if row[n] != check[n]:
				bool_ans = 0
				break

	for j in range(9):
		col = []
		for i in range(9):
			col.append(board[i][j])
		col.sort()
		for n in range(9):
			if col[n] != check[n]:
				bool_ans = 0
				break

	for k in range(0,9,3):
		for l in range(0,9,3):
			arr = []
			for i in range(k, k+3):
				for j in range(l, l+3):
					arr.append(board[i][j])
			arr.sort()
			for n in range(9):
				if arr[n] != check[n]:
					bool_ans = 0
					break

	print(f"#{tc} {bool_ans}")