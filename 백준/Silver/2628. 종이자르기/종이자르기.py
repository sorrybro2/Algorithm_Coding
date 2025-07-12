width, height = map(int,input().split())

cutCnt = int(input())

horizontal_cuts = [0, height]
vertical_cuts = [0, width]

for _ in range(cutCnt):
    direction, point = map(int,input().split())
    if direction == 0:
        horizontal_cuts.append(point)
    if direction == 1:
        vertical_cuts.append(point)

horizontal_cuts.sort()
vertical_cuts.sort()

max_height = max([horizontal_cuts[i+1]-horizontal_cuts[i] for i in range(len(horizontal_cuts)-1)])
max_width = max([vertical_cuts[i+1]-vertical_cuts[i] for i in range(len(vertical_cuts)-1)])

print(max_height*max_width)