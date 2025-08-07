import sys
input = sys.stdin.readline

n = int(input())
cnt = 0

while n>0:
    if n == 1:
        cnt = -1
        break
    elif n == 3:
        cnt = -1
        break
    elif n % 2 == 1:
        n -= 5
        cnt += 1
    elif n % 2 == 0 and n % 5 == 0:
        n = n // 5
        cnt += n
        break
    elif n % 2 == 0:
        n -= 2
        cnt += 1


print(cnt)