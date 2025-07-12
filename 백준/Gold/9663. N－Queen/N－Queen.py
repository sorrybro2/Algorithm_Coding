n = int(input())

ans = 0
row = [0]*n

def queen_rule(x):
    for i in range(x):
        if row[i]==row[x] or abs(row[x]-row[i])==abs(x-i):
            return False
    return True

def queens_cnt(x):
    global ans
    if x == n:
        ans += 1
        return
    else:
        for i in range(n):
            row[x]=i
            if queen_rule(x):
                queens_cnt(x+1)
queens_cnt(0)
print(ans)