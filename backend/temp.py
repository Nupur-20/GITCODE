import sys
# Input format is x=sys.argv[i]
# Enter your code here
x=int(sys.argv[1])
sum=0
for i in range(x):
    y=int(sys.argv[i+2])
    sum^=y
print(sum)