def Number(n):
    d = 2
    while n % d != 0:
        d += 1
        print(d == n)
