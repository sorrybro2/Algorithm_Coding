T = int(input())

for test_case in range(1, T + 1):
	date = input().strip()
	year = int(date[:4])
	month = int(date[4:6])
	day = int(date[6:])
    
	if month < 1 or month > 12 :
		print(f"#{test_case} -1")
	elif month == 2 and 1 <= day <= 28:
		print(f"#{test_case} {year:04d}/{month:02d}/{day:02d}")
	elif month in [1,3,5,7,8,10,12] and 1 <= day <= 31:
		print(f"#{test_case} {year:04d}/{month:02d}/{day:02d}")
	elif month in [4,6,9,11] and 1 <= day <= 30:
		print(f"#{test_case} {year:04d}/{month:02d}/{day:02d}")
	else:
		print(f"#{test_case} -1")