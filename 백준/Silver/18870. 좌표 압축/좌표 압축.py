import sys
input = sys.stdin.readline

n=int(input())
arr = list(map(int, input().split()))
sort_arr = sorted(set(arr)) # set을 이용하여 중복을 없애면 index가 곧 더 작은 수의 개수

def lower_cnt(x):
    st = 0
    en = len(sort_arr)-1

    while st<=en:
        mid = (st+en)//2
        if sort_arr[mid] == x:
            return mid
        elif sort_arr[mid]<x:
            st = mid+1
        else:
            en = mid
    
    return -1

ans = [0]*n

for i in range(n):
    cnt_ans = lower_cnt(arr[i])
    ans[i] += cnt_ans

print(' '.join(map(str, ans)))