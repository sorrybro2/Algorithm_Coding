import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
    stack=[]
    line = input().strip()
    is_valid = True

    for char in line:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                is_valid = False
                break

    if is_valid and not stack:
        print("YES")
    else:
        print("NO")