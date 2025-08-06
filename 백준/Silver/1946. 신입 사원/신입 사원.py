import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    newc_scr = [tuple(map(int, input().split()))for _ in range(n)]# 위치가 여기서 그냥 배열 안에서 반복문을 돌아야함
    newc_scr.sort(key = lambda x : (x[0], x[1]))
    last_intv = newc_scr[0][1]
    cnt = 1
    for i in range(1,n):
        if newc_scr[i][1] < last_intv:
            cnt += 1
            last_intv = newc_scr[i][1]
    print(cnt)