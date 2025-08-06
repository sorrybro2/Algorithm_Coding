import sys
input = sys.stdin.readline
n = int(input())

meetings = [tuple(map(int, input().split()))for _ in range(n)]
meetings.sort(key=lambda x:(x[1],x[0]))

cnt = 0
end_time = 0

for st, en in meetings:
    if end_time <= st:
        cnt += 1
        end_time = en

print(cnt)