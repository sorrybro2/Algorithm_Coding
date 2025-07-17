import sys

n = int(sys.stdin.readline())
arrN = set(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())
arrM = list(map(int, sys.stdin.readline().split()))

for x in arrM:
    print(1 if x in arrN else 0)