import sys
# Input format is x=sys.argv[i]
# Enter your code here
x=int(sys.argv[1])
for i in range(x):
    y=int(sys.argv[i*2+2])
    z=int(sys.argv[i*2+3])
    print(y+z)