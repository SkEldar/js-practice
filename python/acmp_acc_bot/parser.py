# -*- coding: cp1251 -*-
import telebot
import config
from telebot import types
bot = telebot.TeleBot('1106050103:AAFR9W02125uu-e1MY_5I2qFNdGhAM9d9M4')
@bot.message_handler(commands=['start'])
def sr(message):
    #keyboard
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    item1 = types.KeyboardButton("👉 ПОДАТЬ ЗАЯВКУ👈")
    markup.add(item1)
    bot.send_message(message.chat.id,"Здравствуй 🖐\nСтранно, но я что-то не могу найти тебя в наших рядах 🧐\nА ну ка давай быстро подавай заявку и присоединяйся к нам!",reply_markup=markup)
@bot.message_handler(content_types=['text'])
def msg(message):
    if message.chat.type == 'private':
        if message.text == '👉 ПОДАТЬ ЗАЯВКУ👈':
            bot.send_message(message.chat.id,'⚡️ Запрещено медиа с некорректным содержанием : (порно, насилие, убийства, призывы к экстремизму, реклама наркотиков)\n ⚡️ Запрещен спам, флуд, пересылки с других каналов, ссылки на сторонние ресурсы, всякого рода реклама так же запрещена.\n⚡️ Запрещено  обсуждать других ТСов.\n⚡️ Если что-то не устраивает по поводу %, беседы и т.д. пишите администрации проекта, а не разводите срач в группе.\n⚡️ Запрещено узнавать у друг друга персональную информацию.\n⚡️ Запрещено оскорблять администрацию.\n⚡️ Запрещено попрошайничество в беседе воркеров.\n⚡️ Администрация не несёт ответственности за блокировку кошельков/карт.\n⚡️ Конфликты между собой решать в лс.\n⚡️ Месяц без залётов, будем прощаться.\n')

bot.polling(none_stop=True)