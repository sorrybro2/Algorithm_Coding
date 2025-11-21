n = int(input())
arr = []
for i in range(1, n+1):
	cnt = 0
	for num in str(i):
		if num in '369':
			cnt += 1
	if cnt > 0:
		arr.append('-'*cnt)
	else:
		arr.append(str(i))

print(' '.join(arr))