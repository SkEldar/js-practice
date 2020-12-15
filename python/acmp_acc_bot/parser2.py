from bs4 import BeautifulSoup as BS
import requests
import time
import random
words = ["аист", "акула", "бабуин", "баран", "барсук", "бобр", "бык", "варан", "верблюд", "волк", "вомбат", "воробей", "ворон", "выдра",
         "голубь", "гусь", "додо", "дятел", "енот", "ехидна", "еж", "жаба", "жираф", "журавль", "заяц", "зебра", "землеройка", "зяблик",
         "игуана", "кабан", "казуар", "кайман", "какаду", "кальмар", "камбала", "канарейка", "каракатица", "карп", "кенгуру",
         "киви", "кит", "лама", "ламантин", "ласка", "ласточка", "лебедь", "лев", "лемур", "ленивец", "леопард", "лиса", "лягушка",
         "мотылек", "муравьед", "муравей", "мангуст", "медведь", "морж", "муха", "мышь", "медуза", "нарвал", "носорог", "орел", "омар", "олень", "овцебык",
         "осьминог", "орел", "осел", "оса", "овца", "опоссум", "обезьяна", "паук", "пескарь", "пингвин", "пиранья", "попугай",
         "пчела", "рысь", "рыба", "росомаха", "страус", "сурок", "стрекоза", "сорока", "сова", "снегирь", "сокол", "собака", "слон",
         "слон", "скорпион", "скворец", "скат", "сельдь", "свинья", "сурикат", "скунс", "слизень", "светлячок", "тюлень", "тукан", "тигр",
         "трясогуска", "термит", "тетерев", "тунец", "тритон", "тарантул", "таракан", "тля", "утконос", "уж", "устрица", "улитка", "угорь", "фазан", "фламинго",
         "форель", "хорек", "хомяк", "хамелеон", "цапля", "цесарка", "цикада", "черепаха", "червь", "чайка", "шимпанзе", "шиншилла",
         "щука", "эму", "ящерица", "ястреб", "як", "ягуар"]

print("Привет,меня зовут Рэй! Давай знакомиться")
name = input()
print("Рад знакомству " + name)
print("Если ты не знал,то я показываю курс доллара к тенге))")
time.sleep(3)
print("зачем тебе доллар? может поиграем в игры?")
print("Но учти если зайдешь в игры то выхода нет((")
time.sleep(3)
print("Если есть желание то набери комбинацию 667")
print("Если тебе нужен доллар то набери комбинацию 777")
a = int(input())
if a == 667:
    print("Молодец)")
    print("у меня есть 2 легких игры,выбор за тобой))")
    print("1)Виселица, 2)Угадай число")
    print("Выбор за тобой!")
    b = int(input())
    if b == 1:
        print(" Суть игры достаточно банальна и проста - называя буквы, угадать слово.")
        word = words[random.randrange(5)]
        len_word = len(word)
        health = 10
        test = False
        used_letters = ""
        win_word = []
        for i in range(len(word)):
            win_word += "_"

        while len_word != 0 and health != 0:
            test = False
            while True:
                letter = input("\nвведите букву ")
                if letter in used_letters or len(letter) > 1:
                    print("\nНе больше одного символа, попробуйте снова!")
                else:
                    used_letters += letter
                    break
            count = 0
            for i in word:
                if letter in i:
                    len_word -= 1
                    test = True
                    win_word[count] = letter
                count += 1

            if not test:
                health -= 1
                print("Неверно")
            else:
                print("Верно")
                print(win_word)

            print("Ваше здоровье = ", health)

        if(len_word == 0):
            print("\nПОБЕДИТЕЛЬ!!! Слово было", word.upper())
        else:
            print("\nТЫ ПРОИГРАЛ! ПОПРОБУЙ СНОВА!")
    if b == 2:
        def again():
            print("Хочешь играть с жизнями?")
            y = input()
            if y == "Да" or y == "Yes":
                print("Сколько жизней хочешь?")
                hearts = int(input())
                print("Окей у тебя будет " + str(hearts) + " жизней")
                print("Выбирай диапазон!")
                print("От")
                s = int(input())
                print("До")
                g = int(input())
                rand_chislo = random.randint(s, g)
                print("Я выбрал число")
                print("Твоя очередь угадывать!")
                chislo = int(input())
                while chislo != rand_chislo:
                    print("К сожалению ты не угадал,попробуй еще раз!")
                    new_hearts = hearts - 1
                    print("у тебя осталось " + str(new_hearts) + " жизней")
                    chislo = int(input())
                    if new_hearts == 0:
                        print("У тебя закончились жизни и ты проиграл ")
                        print("Цифра была " + str(rand_chislo))
                    if chislo == rand_chislo:
                        print("Урааа,ты выиграл!")
                        break
                print("Хочешь сыграть еще раз?")
                t = input()
                if t == "Да" or t == "Yes":
                    again()
            elif y == "Нет" or y == "No":
                print("Выбирай диапазон!")
                print("От")
                s = int(input())
                print("До")
                g = int(input())
                rand_chislo = random.randint(s, g)
                print("Я выбрал число")
                print("Твоя очередь угадывать!")
                chislo = int(input())

                while chislo != rand_chislo:
                    print("К сожалению ты не угадал,попробуй еще раз!")
                    chislo = int(input())
                    if chislo == rand_chislo:
                        print("Урааа,ты выиграл!")
                        break
                print("Хочешь сыграть еще раз?")
                t = input()
                if t == "Да" or t == "Yes":
                    again()
        again()
elif a == 777:
    class Curr:
        r = 'https://ru.investing.com/currencies/usd-kzt'
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:74.0) Gecko/20100101 Firefox/74.0'}
        curent_price = 0
        diff = 5

        def __init__(self):
            self.curent_price = float(self.price().replace(",", "."))

        def price(self):
            full = requests.get(self.r, headers=self.headers)
            soup = BS(full.content, 'html.parser')
            convert = soup.findAll("span", {
                                   "id": "last_last", "dir": "ltr", "class": "arial_26 inlineblock pid-2148-last"})
            return convert[0].text

        def check(self):
            currency = float(self.price().replace(",", "."))
            if currency >= self.curent_price + self.diff:
                print("О БОГИ,О БОГИ,КУРС РАСТЕТ")
            elif currency <= self.curent_price - self.diff:
                print("Курс упал,может возьмем немного ?")

            print("В данный момент 1 доллар = " + str(currency) + " тг")
            time.sleep(5)
            self.check()

    currency = Curr()
    currency.check()
