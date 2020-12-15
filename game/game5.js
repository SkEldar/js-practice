var readlineSync = require('readline-sync');
var num = readlineSync.question("Num? ");
if (num <= 4) {
    console.log("Few");
} else if (num >= 5 && num <= 9) {
    console.log("several");
} else if (num >= 10 && num <= 19) {
    console.log("pack");
} else if (num >= 20 && num <= 49) {
    console.log("Lots");
} else if (num >= 50 && num <= 99) {
    console.log("Horde");
} else if (num >= 100 && num <= 249) {
    console.log("Throng");
} else if (num >= 250 && num <= 499) {
    console.log("swarm");
} else if (num >= 500 && num <= 999) {
    console.log("Zounds");
} else if (num >= 1000) {
    console.log("Legion");
} else {
    console.log("EROR 404");
}