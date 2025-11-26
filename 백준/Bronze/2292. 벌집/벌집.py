n = int(input())

if(n==1):
    print(1)
else:
    ans = 0
    minus = 0
    n -= 1

    while(n>0):
        n = n - minus
        ans += 1
        minus += 6

    print(f"{ans}")