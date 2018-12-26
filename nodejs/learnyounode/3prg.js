var fs = require('fs');

var file = fs.readFineSync(process.argv[2]);


file = toString();
file = toSplit('\n');

console.log(file.length -1);