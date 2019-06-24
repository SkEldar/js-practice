import sys


def moon_weight():
    print('your weight?')
    weight = int(sys.stdin.readline())
    print('plus every year?')
    every_year = int(sys.stdin.readline())
    print('how old are you?')
    years_old = int(sys.stdin.readline())
    for x in range(0, years_old):
        weight = weight + every_year
        print(weight)
        if x == years_old:
            break


moon_weight()
