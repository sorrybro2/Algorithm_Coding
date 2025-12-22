n = int(input())
word = input()

alpha = [0] * 26

for l in word:
    idx = ord(l) - ord('a')
    alpha[idx] += 1

max_value = max(alpha)
max_alpha = chr(alpha.index(max_value)+97)

print(f"{max_alpha} {max_value}")