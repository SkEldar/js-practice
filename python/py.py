while True:
    what = input("выбери действие: ")
    a = float(input())
    b = float(input())

    if what == "+":
        c = a+b
        print(c)
    elif what == "-":
        c = a-b
        print(c)
    elif what == "*":
        c = a*b
        print(c)
    elif what == "/":
        c = a/b
        print(c)
    elif what == "exit":
       break
    else:
        print("error")