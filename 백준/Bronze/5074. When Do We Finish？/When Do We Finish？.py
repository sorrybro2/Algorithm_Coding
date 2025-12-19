while(True):
    c1, c2 = input().split()

    if c1 == "00:00" and c2 == "00:00":
        break

    hour1, min1 = map(int, c1.split(':'))
    hour2, min2 = map(int, c2.split(':'))

    
    sum_min = min1 + min2
    extra_hour = int(sum_min / 60)
    min = sum_min % 60

    sum_hour = hour1 + hour2 + extra_hour
    hour = sum_hour % 24
    extra_day = int(sum_hour / 24)

    if extra_day > 0:
        print(f"{hour:02d}:{min:02d} +{extra_day}")
    else:
        print(f"{hour:02d}:{min:02d}")