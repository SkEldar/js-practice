def moon_weight(weight, every_year):
    for x in range(0, 15):
        weight = weight + every_year
        print(weight)
        if x == 15:
            break


moon_weight(3, 2)
