from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
q = deque()

for _ in range(n):
    command = input().strip()
    if command.startswith('push'):
        _, a = command.split()
        q.append(a)
    elif command == 'pop':
        print(q.popleft() if q else -1)
    elif command == 'size':
        print(len(q))
    elif command == 'empty':
        print(0 if q else 1)
    elif command == 'front':
        print(q[0] if q else -1)
    elif command == 'back':
        print(q[-1] if q else -1)
