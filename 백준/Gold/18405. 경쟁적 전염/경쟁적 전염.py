# 바이러스가 매초마다 상하좌우로 증식한다 -> 낮은 종류일수록 먼저 증식함
# 몇초 뒤, 해당 구역에 아무것도 없다면 0출력 아니면 해당 바이러스 이름 숫자 출력

#여기서 포인트 각자 상하좌우로 퍼지되, 낮은 순번부터 퍼져 높은 순번은 못가는 곳도 있다는 것이 포인트임
#초별로 해당 구역을 생각해야하므로, 굉장히 까다로움

from collections import deque
import sys
input = sys.stdin.readline

n, k = map(int, input().split())

board = []
virus = []

# 입력 및 초기 바이러스 위치 저장
for i in range(n):
    data = list(map(int, input().split()))
    board.append(data)
    for j in range(n):
        if data[j] != 0:
            virus.append((data[j], i, j, 0))  # (바이러스 번호, x, y, 시간)

# 낮은 번호 우선 정렬
virus.sort()
q = deque(virus)

s, x, y = map(int, input().split())

# 방향 벡터
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# BFS
while q:
    virus_num, a, b, time = q.popleft()

    if time == s:
        break

    for i in range(4):
        nx = a + dx[i]
        ny = b + dy[i]
        if 0 <= nx < n and 0 <= ny < n:
            if board[nx][ny] == 0:  # 아직 전염되지 않은 곳
                board[nx][ny] = virus_num
                q.append((virus_num, nx, ny, time + 1))

print(board[x-1][y-1])  # 좌표는 1-indexed