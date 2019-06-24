def moon_weight(weight, every_year, years_old):
    for x in range(0, years_old):
        weight = weight + every_year
        print(weight)
        if x == years_old:
            break


moon_weight(3, 2, 5)
