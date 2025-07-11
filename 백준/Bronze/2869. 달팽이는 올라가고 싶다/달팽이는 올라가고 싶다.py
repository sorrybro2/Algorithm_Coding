from math import ceil

A, B, V = map(int, input().split())

days = (V-B)/(A-B)

print(ceil(days))