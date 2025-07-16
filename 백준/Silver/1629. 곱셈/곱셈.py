a,b,c = map(int,input().split())
def power(x, n):
    if n == 0:
        return 1
    elif n % 2 == 0:
        half = power(x, n//2)
        return half*half%c
    else:
        return x*power(x, n-1)%c

print(power(a,b))