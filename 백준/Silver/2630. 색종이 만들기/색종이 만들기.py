import sys
input = sys.stdin.readline

N = int(input())
paper = [list(map(int,input().split()))for _ in range(N)]

white = 0
blue = 0

def divide(x,y,n):
    color = paper[x][y]
    global white, blue
    for i in range(x, x+n):
        for j in range(y, y+n):
            if paper[i][j] != color:
                half = n//2
                divide(x,y,half)
                divide(x,y+half,half)
                divide(x+half,y,half)
                divide(x+half,y+half,half)
                return
    
    if color == 0:
        white += 1
    else :
        blue += 1

divide(0,0,N)
print(white)
print(blue)