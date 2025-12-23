n = int(input())
word = input()

alphabet = [0] * 26

for c in word:
    idx = ord(c) - ord('a')
    alphabet[idx] += 1

max_value = max(alphabet)
max_alpha = chr(alphabet.index(max_value)+97)

print(f"{max_alpha} {max_value}")