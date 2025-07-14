n = int(input())

for _ in range(n):
    cnt, word = input().split()
    cnt = int(cnt)
    new_word = ""
    for i in range(len(word)):
        new_word += word[i]*cnt
    print(new_word)