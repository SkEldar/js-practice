import math
print(ax^2 + bx + c = 0))
a = float(input())
b = float(input())
c = float(input())
discr = b ** 2 - 4 * a * c
if discr > 0:
    x1 = (-b + math.sqrt(discr)) / (2 * a)
    x2 = (-b - math.sqrt(discr)) / (2 * a)
elif discr == 0:
    x = -b / (2 * a)
else:
    print("Корней нет")

