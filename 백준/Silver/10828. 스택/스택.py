import sys
input = sys.stdin.readline

n = int(input())
stack = []

for _ in range(n):
    command = input().strip()
    if command.startswith('push'):
        _, a = command.split()
        stack.append(a)
    elif command == 'pop':
        print(stack.pop() if stack else -1)
    elif command == 'size':
        print(len(stack))
    elif command == 'empty':
        print(0 if stack else 1)
    elif command == 'top':
        print(stack[-1] if stack else -1)


