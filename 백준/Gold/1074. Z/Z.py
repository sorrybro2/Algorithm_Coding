n, r, c = map(int,input().split())
ans = 0

def z(num, x, y):
    global ans
    if num==0:
        return
    half = 2 ** (num-1)
    if x < half and y < half:
        z(num-1,x,y)
    elif x < half and y >= half:
        ans += half*half
        z(num-1,x,y-half)
    elif x >= half and y < half:
        ans += half*half*2
        z(num-1, x-half, y)
    else:
        ans += half*half*3
        z(num-1, x-half, y-half)

z(n,r,c)
print(ans)