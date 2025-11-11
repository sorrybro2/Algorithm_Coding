n = int(input())
arr = []

for i in range(0, n+1):
	arr.append(i)

arr.reverse()
print(*arr)