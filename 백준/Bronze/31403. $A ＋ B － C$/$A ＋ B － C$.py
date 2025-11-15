nums = []

for i in range(3):
    n = int(input())
    nums.append(n)

ans1 = nums[0] + nums[1] - nums[2]

ans2 = int(str(nums[0]) + str(nums[1])) - nums[2]

print(ans1)
print(ans2)