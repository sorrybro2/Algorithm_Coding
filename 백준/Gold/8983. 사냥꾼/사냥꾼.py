m,n,l = map(int,input().split()) # m = 사냥꾼 수, n = 동물 수, l = 사정거리
hunt_posi = list(map(int, input().split()))
hunt_posi.sort()
target = [list(map(int,input().split()))for _ in range(n)]

ans = 0

def can_shoot(a,b):
    global ans
    for x in hunt_posi:
        cur_l = (a-x)**2 + (b**2)
        gun_l = l**2
        if cur_l <= gun_l:
            ans +=1
            break


for i in range(n):
    t_x = target[i][0]
    t_y = target[i][1]
    can_shoot(t_x,t_y)

print(ans)


