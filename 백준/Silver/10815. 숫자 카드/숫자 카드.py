import sys
input = sys.stdin.readline

n = (int(input()))
arrN = list(map(int,input().split()))
m = (int(input()))
arrM = list(map(int,input().split()))

arrN.sort()
ans = []

def find_card(x):
    st = 0
    en = n-1
    while st<en:
        mid = (st+en)//2
        if x == arrN[mid]:
            return True
        elif x >= arrN[mid]:
            st = mid+1
            if x == arrN[mid+1]:
                return True
        elif x < arrN[mid]:
            en = mid            
    return False

for i in arrM:
    if find_card(i):
        ans.append(1)
    else:
        ans.append(0)

print(' '.join(map(str, ans)))