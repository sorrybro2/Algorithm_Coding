x = int(input())
y = int(input())

first = x*(y%10)
sec = x*(y//10%10)
third = x*(y//100)
allSum = first + sec*10 + third*100

print(first)
print(sec)
print(third)
print(allSum)
