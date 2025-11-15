T = int(input())

for i in range(T):
    n, str = input().split()
    ans = []
    for i in str:
        ans.append(i*int(n))
    print(''.join(ans))