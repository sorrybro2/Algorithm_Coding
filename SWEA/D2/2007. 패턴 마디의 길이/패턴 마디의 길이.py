T = int(input())
for tc in range(1, T+1):
	sentence = input().strip()
	n = 1
	while True:
		if sentence[0:n] == sentence[n:2*n]:
			print(f"#{tc} {n}")
			break
		n += 1