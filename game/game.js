var readlineSync = require('readline-sync');
var randomNum = Math.floor(Math.random() * 11);
var what = readlineSync.question("Number? ");
while (randomNum != what) {
    if (randomNum === what) {
        console.log("Bingo!");
    } else {
        console.log("Try again");
        what = readlineSync.question("Number? ");
    };
};
