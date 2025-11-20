T = int(input())
for tc in range(1, T+1):
	n = int(input())
	tri = [[0]*i for i in range(1,n+1)]
	print(f"#{tc}")
	for i in range(n):
		tri[i][0] = 1
		tri[i][i] = 1
		for j in range(1,i):
			tri[i][j] = tri[i-1][j-1] + tri[i-1][j]
	for row in tri:
		print(' '.join(map(str, row)))