n = int(input())

list = []

for i in range(1,n+1):
    if(n%i==0):
        list.append(str(i))

print(' '.join(list))