T = int(input())

for tc in range(1, T+1):
	n = int(input())
	arr = list(map(int, input().split()))
    
	count_max_num = max(arr, key=arr.count)
	print(f"#{n} {count_max_num}")