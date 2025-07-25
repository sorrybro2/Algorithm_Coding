n = int(input())
conn = int(input())

arr = [[0]*(n+1) for _ in range(n+1)]
visited = [False]*(n+1)
cnt = 0

for _ in range(conn):
    cur, nxt = map(int,input().split())
    arr[cur][nxt] = 1
    arr[nxt][cur] = 1

def is_virus(x):
    global cnt
    visited[x] = True
    for i in range(n+1):
        if arr[x][i] == 1 and visited[i] == False:
            cnt+=1
            is_virus(i)
    return

is_virus(1)
print(cnt)