a,b,c = map(int,input().split())

def divide(x,y):
    if y == 1:
        return x % c
    half = divide(x, y//2)
    if y%2==0:
        return half*half%c
    else:
        return half*half*x%c
    
ans = divide(a,b)
print(ans)