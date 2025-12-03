n, m = map(int, input().split())

def gcd(n,m):
    max_value = 1
    for i in range(1, min(n,m)+1):
        if n % i == 0 and m % i == 0:
            max_value = i
    return max_value

def lcm(n,m):
    ans = n*m//gcd(n,m)
    return ans

print(gcd(n,m))
print(lcm(n,m))
        
    