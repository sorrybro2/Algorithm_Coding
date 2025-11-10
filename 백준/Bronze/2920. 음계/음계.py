n = list(map(int, input().split()))

ascending = [1,2,3,4,5,6,7,8]
descending = [8,7,6,5,4,3,2,1]

if n == ascending:
    answer = "ascending"
elif n == descending:
    answer = "descending"
else:
    answer = "mixed"

print(answer)