//random word
function getRandomWord() {
    var randomNum = Math.floor(Math.random() * 12);
    var alphabet = 'абвгдеёжзиклмнопрстуфхцчшщъыьэюя';
    var a = "";
    for (var i = 0; i < randomNum; i++) {
        var n = alphabet[Math.floor(Math.random() * alphabet.length)];
        a += n;
    };
    return a;
};
console.log(getRandomWord());

//random sentence
function getRandomSentence() {
    var randomNumForSentence = Math.floor(Math.random() * 10);
    var b = "";
    for (var x = 0; x < randomNumForSentence; x++) {
        var g = getRandomWord();
        b += " ";
        b += g;
    };
    b += ".";
    return b;
};
console.log(getRandomSentence());

// random text

function getRandomText() {
    var randomNumForText = Math.floor(Math.random() * 15);
    var m = "";
    for (var q = 0; q < randomNumForText; q++) {
        var s = getRandomSentence();
        m += " ";
        m += s;
    };
    return m;
};
console.log(getRandomText());