n = int(input())
even = [int(input()) for _ in range(n)]

def is_prime(x):
    if x < 2:
        return False
    for i in range(2,x):
        if x % i == 0:
            return False
    return True

for i in even:
    a,b = i//2, i//2
    while a > 0:
        if is_prime(a) and is_prime(b):
            print(f"{a} {b}")
            break
        else :
            a -= 1
            b += 1