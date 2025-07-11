ary = []

for i in range(9):
    x = int(input())
    ary += [x]

print(max(ary))
print(ary.index(max(ary))+1)
