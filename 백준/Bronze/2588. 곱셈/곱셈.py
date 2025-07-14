one = int(input())
two = int(input())

fst = one*(two%10)
sec = one*(two//10%10)
trd = one*(two//100)

print(fst)
print(sec)
print(trd)
print(fst+(sec*10)+(trd*100))

