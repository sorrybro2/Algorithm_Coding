import sys
input = sys.stdin.readline

n = int(input())
tree = {}

for _ in range(n):
    a,b,c = map(str,input().split())
    tree[a] = [b,c]

def preorder(x):
    if x == '.':
        return
    print(x, end='')
    preorder(tree[x][0])
    preorder(tree[x][1])

def inorder(x):
    if x == '.':
        return
    inorder(tree[x][0])
    print(x,end='')
    inorder(tree[x][1])

def postorder(x):
    if x == '.':
        return
    postorder(tree[x][0])
    postorder(tree[x][1])
    print(x,end='')

preorder('A')
print()
inorder('A')
print()
postorder('A')