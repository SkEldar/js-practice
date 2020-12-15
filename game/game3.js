var readlineSync = require('readline-sync');
var n = readlineSync.question("Num? ");
var p = [];
while (p.length != n) {
    var x = readlineSync.question("Name? ");
    p.push(x);

};
console.log(p);