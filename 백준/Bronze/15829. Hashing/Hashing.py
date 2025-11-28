n = int(input())
word = input()

ans = 0
alphabet = "abcdefghijklmnopqrstuvwxyz"

for i in range(len(word)):
    al = alphabet.index(word[i])+1
    ans += al * (31 ** i)
    
print(ans)