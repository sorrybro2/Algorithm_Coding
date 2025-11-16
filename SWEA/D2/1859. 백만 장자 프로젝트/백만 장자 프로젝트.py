T = int(input())

for tc in range(1, T+1):
	n = int(input())
	nums = list(map(int, input().split()))
    
	max = 0
	total = 0
    
	for i in range(n-1, -1, -1):
		if nums[i] > max:
			max = nums[i]
		else:
			total += (max - nums[i])
	print(f"#{tc} {total}")