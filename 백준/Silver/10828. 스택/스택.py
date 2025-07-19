import sys
input = sys.stdin.readline

n = int(input())
stack = []

for _ in range(n):
    command = input().strip()
    if command.startswith("push"):
        _, num = command.split()
        stack.append(num)

    elif command == "top":
        print(stack[-1] if stack else -1)

    elif command == "empty":
        print(1 if len(stack)==0 else 0)

    elif command == "pop":
        print(stack.pop() if len(stack) > 0 else -1)

    elif command == "size":
        print(len(stack))