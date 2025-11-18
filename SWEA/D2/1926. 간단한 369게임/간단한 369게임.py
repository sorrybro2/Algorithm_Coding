n = int(input())

arr = []

for i in range(1,n+1):
	s = str(i)
	cnt = 0
	for ch in s:
		if ch in '369':
			cnt += 1
	if cnt > 0:
		arr.append('-'*cnt)
	else:
		arr.append(s)

print(' '.join(arr))