import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
ops = list(map(int, input().split()))

max_val = -10**9
min_val = 10**9

def dfs(idx, cur_val, plus, minus, mul, div):
    global max_val, min_val
    if idx == n:
        max_val = max(max_val,cur_val)
        min_val = min(min_val,cur_val)
        return
    
    if plus > 0:
        dfs(idx+1, cur_val + arr[idx], plus-1, minus, mul, div)
    if minus > 0:
        dfs(idx+1, cur_val - arr[idx], plus, minus-1, mul, div)
    if mul > 0:
        dfs(idx+1, cur_val * arr[idx], plus, minus, mul-1, div)
    if div > 0:
        if cur_val < 0:
            dfs(idx+1, -(-cur_val//arr[idx]), plus, minus, mul, div-1)
        else:
            dfs(idx+1, cur_val//arr[idx], plus, minus, mul, div-1)

dfs(1, arr[0], ops[0], ops[1], ops[2], ops[3])

print(max_val)
print(min_val)