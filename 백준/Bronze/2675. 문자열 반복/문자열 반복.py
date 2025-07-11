n = int(input())

for i in range(n):
    data = input().split()
    cnt = int(data[0])
    word = data[1]
    answer = ""
    for i in range(len(word)):
        answer += word[i]*cnt
    print(answer)