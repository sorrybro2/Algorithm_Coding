import sys
sys.setrecursionlimit(10**6)

preorder = list(map(int, sys.stdin.buffer.read().split()))

def postorder(start, end):
    if start > end:
        return
    root = preorder[start]

    # 왼쪽/오른쪽 구간 나누기
    idx = start + 1
    while idx <= end and preorder[idx] < root:
        idx += 1

    postorder(start + 1, idx - 1)  # 왼쪽
    postorder(idx, end)            # 오른쪽
    print(root)                     # 루트

postorder(0, len(preorder) - 1)
