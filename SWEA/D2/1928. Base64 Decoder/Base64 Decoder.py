T = int(input())

base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

for tc in range(1, T+1):
	sent = input().strip()
	bits = ""
	for ch in sent:
		bits += format(base64.index(ch), '06b')
	result = ""
	for i in range(0, len(bits), 8):
		byte = bits[i:i+8]
		result += chr(int(byte, 2))
	print(f"#{tc} {result}")