const TelegramBot = require("node-telegram-bot-api");
const readlineSync = require("readline-sync");

// replace the value below with the Telegram token you receive from @BotFather
const token = "1003000094:AAGMioSAUO1f_0H2WWE97Ed_3EOBLLBadqk";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
bot.on("message", msg => {
  const chatId = msg.chat.id;
  let message = msg.text;
  bot.sendMessage(
    chatId,
    "Приветствую тебя в игре,для начала напиши 1)/start "
  );
});
bot.on("message", msg => {
  const chatId = msg.chat.id;
  let message = msg.text;

  if (message === "/start") {
    bot.sendMessage(chatId, "Зарегистрируйся,для начала игры");
    bot.sendMessage(chatId, "напиши /reg для регистрации");
    if (message === "/reg") {
      let name = readlineSync.question("Твое имя? ");
      bot.sendMessage(chatId, "Твое имя:");
    }
  }
  console.log(message);
});
