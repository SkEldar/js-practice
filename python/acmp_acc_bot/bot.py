import telebot
import config
from telebot import types
bot = telebot.TeleBot('986484786:AAERNV_NO4_c7cbrd4BWWNly-c01kJMd3Os')


@bot.message_handler(commands=['start'])
def welcome(message):
    sti = open('welc_sticker.webp', 'rb')
    bot.send_sticker(message.chat.id, sti)
    # keyboard
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    item1 = types.KeyboardButton("+ for balance")
    item2 = types.KeyboardButton("- for balance")
    item3 = types.KeyboardButton("X CLEAR BALANCE X")
    item4 = types.KeyboardButton("Show balance")

    markup.add(item1, item2, item3, item4)
    bot.send_message(
        message.chat.id, "Welcome,{0.first_name}!\nI'm - <b>{1.first_name}</b>,bot was created by @zhdolj".format(message.from_user, bot.get_me()), parse_mode='html', reply_markup=markup)


@bot.message_handler(content_types=['text'])
def speak(message):
    if message.text == "+ for balance":
        infile = open("balance.txt")
        line1 = infile.readline().split()
        a = int(line1[0])
        a += 1

        infile = open("balance.txt", "w")
        bot.send_message(message.chat.id, "Balance was changed : " + str(a))
        infile.write(str(a))
        infile.close()

    elif message.text == "- for balance":
        infile = open("balance.txt")
        line1 = infile.readline().split()
        a = int(line1[0])
        a -= 1
        infile = open("balance.txt", "w")
        bot.send_message(message.chat.id, "Balance was changed : " + str(a))
        infile.write(str(a))
        infile.close()
    elif message.text == "X CLEAR BALANCE X":
        infile = open("balance.txt")
        line1 = infile.readline().split()
        a = int(line1[0])
        a = 0
        infile = open("balance.txt", "w")
        bot.send_message(message.chat.id, "Balance was changed : " + str(a))
        infile.write(str(a))
        infile.close()
    elif message.text == "Show balance":
        infile = open("balance.txt")
        line1 = infile.readline().split()
        a = int(line1[0])
        infile = open("balance.txt", "w")
        bot.send_message(message.chat.id, "Your current balance : " + str(a))
        infile.write(str(a))
        infile.close()


bot.polling(none_stop=True)
