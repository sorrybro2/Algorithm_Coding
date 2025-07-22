import sys
input = sys.stdin.readline

n = int(input())
arrN = list(map(int,input().split()))
m = int(input())
arrM = list(map(int,input().split()))
arrN.sort()

def lower_index(arr, x):
    start = 0
    end = len(arr)
    while start<end:
        mid = (start+end)//2
        if arr[mid] < x:
            start = mid+1
        else:
            end = mid
    return start

def upper_index(arr, x):
    start = 0
    end = len(arrN)
    while start<end:
        mid = (start+end)//2
        if arr[mid] <= x:
            start = mid+1
        else:
            end = mid
    return start


ans = [upper_index(arrN, i)-lower_index(arrN, i)for i in arrM]

print(' '.join(map(str, ans)))
