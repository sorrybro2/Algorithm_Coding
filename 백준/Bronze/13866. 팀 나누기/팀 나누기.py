a,b,c,d = map(int, input().split())
list = []

list.append(abs((a+b)-(c+d)))
list.append(abs((a+d)-(b+c)))
list.append(abs((a+c)-(b+d)))

ans = min(list)
print(ans)