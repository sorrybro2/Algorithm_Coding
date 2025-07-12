def ha_noi(one, three, n):
    if n==1:
        print(one,three)
        return
    ha_noi(one, 6-three-one, n-1)
    print(one,three)
    ha_noi(6-three-one, three, n-1)

n = int(input())
print(2**n-1)
if n <= 20:
    ha_noi(1,3,n)
