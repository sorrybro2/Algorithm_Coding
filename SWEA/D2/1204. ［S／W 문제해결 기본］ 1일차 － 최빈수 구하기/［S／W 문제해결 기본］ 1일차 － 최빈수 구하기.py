T = int(input())
for tc in range(1, T+1):
	n = int(input())
	arr = list(map(int, input().split()))
	
	ans = max(arr, key=arr.count)
	print(f"#{n} {ans}")