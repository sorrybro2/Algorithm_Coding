n = int(input())

for i in range(n):
    group = list(map(int,input().split()))
    sum = 0
    cnt = 0
    for i in range(1, len(group)):
        sum += group[i]
    avg = sum / group[0]
    for i in range(1, len(group)):
        if group[i] > avg : cnt += 1
    answer = (cnt/group[0])*100 

    print(f"{answer:.3f}%")
        

        