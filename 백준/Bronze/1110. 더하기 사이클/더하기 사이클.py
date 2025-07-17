n = int(input())
cnt = 0

one = n%10
ten = n//10

def plus_rule(a,b):
    global cnt
    afterOne = (a+b)%10
    afterTen = b*10
    nxtNum = afterOne+afterTen
    cnt+=1
    if n == nxtNum:
        print(cnt)
        return
    else:
        nxtOne = nxtNum%10
        nxtTen = nxtNum//10
        plus_rule(nxtTen, nxtOne) 
    
plus_rule(ten, one)

    

