N = int(input())

def is_hansu(x):
    if x < 100 :
        return True
    if x >= 100 :
        if (x//10%10-x//100) == (x%10-x//10%10):
            return True
    if x == 1000:
        return False

count = 0

for i in range(1,N+1):
    if is_hansu(i) :
        count += 1
print(count)
