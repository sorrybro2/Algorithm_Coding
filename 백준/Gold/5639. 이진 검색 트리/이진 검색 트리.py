import sys
sys.setrecursionlimit(10**6)

preorder = list(map(int, sys.stdin.read().split()))

def postorder(start, end):
    if start > end:
        return

    root = preorder[start]

    idx = start + 1
    while idx <= end and preorder[idx] < root:
        idx += 1

    # 왼쪽
    postorder(start + 1, idx - 1)
    # 오른쪽
    postorder(idx, end)
    # 루트
    print(root)

postorder(0, len(preorder) - 1)


