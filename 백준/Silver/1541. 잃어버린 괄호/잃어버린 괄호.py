import sys
expression = sys.stdin.readline().strip()

parts = expression.split('-')

ans = sum(map(int, parts[0].split('+')))

for part in parts[1:]:
    ans -= sum(map(int, part.split('+')))

print(ans)

