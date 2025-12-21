while(True):
    t1, t2 = input().split()
    
    if t1 == "00:00" and t2 == "00:00":
        break

    h1, m1 = map(int, t1.split(":"))
    h2, m2 = map(int, t2.split(":"))

    total_m = m1 + m2
    remain_h = int(total_m / 60)
    minate = total_m % 60

    total_h = h1 + h2 + remain_h
    remain_d = int(total_h / 24)
    hour = total_h % 24

    if remain_d > 0:
        print(f"{hour:02d}:{minate:02d} +{remain_d}")
    else:
        print(f"{hour:02d}:{minate:02d}")