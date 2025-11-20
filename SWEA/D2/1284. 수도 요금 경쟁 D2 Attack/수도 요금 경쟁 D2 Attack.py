T = int(input())
for tc in range(1, T+1):
	P, R, Q, S, W = map(int, input().split())
	
	#A사 가격
	a_price = P*W

	#B사 가격
	b_price = 0
	if Q > W:
		b_price = R
	else:
		b_price = (W-Q)*S + R
	
	if a_price > b_price:
		print(f"#{tc} {b_price}")
	else:
		print(f"#{tc} {a_price}")