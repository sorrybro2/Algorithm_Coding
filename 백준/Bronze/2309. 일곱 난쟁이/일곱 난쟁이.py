height = [int(input()) for _ in range(9)]
total_height = sum(height)

found = False

for i in range(9):
    for j in range(i+1, 9):
        if total_height-height[i]-height[j] == 100:
            fake1 = height[i]
            fake2 = height[j]
            height.remove(fake1)
            height.remove(fake2)
            height.sort()
            found = True
            break
    if found:
        break

for i in range(7):
    print(height[i])