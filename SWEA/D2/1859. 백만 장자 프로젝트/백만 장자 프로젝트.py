T = int(input())

for test_case in range(1, T + 1):
	N = int(input())
	nums = list(map(int, input().split()))

	max = 0
	total = 0
    
	for i in range( N-1, -1, -1):
		if nums[i] > max:
			max = nums[i]
		else:
			total += (max - nums[i])

	print(f"#{test_case} {total}")