n = int(input())

for i in range(n):
    ox = input()
    sum = 0
    add = 0
    for i in range(len(ox)):
        if ox[i] == 'O':
            add += 1
            sum += add
        if ox[i] == 'X':
            add = 0
    print(sum)
