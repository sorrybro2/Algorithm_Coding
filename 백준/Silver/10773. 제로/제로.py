import sys
input = sys.stdin.readline

n = int(input())
stack = []

for _ in range(n):
    money = int(input())
    if money == 0:
        stack.pop()
    else:
        stack.append(money)

print(sum(stack))
