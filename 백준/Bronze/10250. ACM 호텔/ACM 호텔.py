import math

T = int(input())

for i in range(T):
    h, w, n = map(int, input().split())
    hun = n%h if n%h > 0 else h
    one = math.ceil(n/h)
    print(f"{hun}{one:02d}")
