list = []

for i in range(1,10):
    n = int(input())
    list.append(n)
    
max_num = max(list)
print(max_num)
max_idx = list.index(max_num)+1
print(max_idx)