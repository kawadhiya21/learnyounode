var fs = require('fs');
var filePath = process.argv[2];

var contents = fs.readFileSync(filePath).toString().split('\n').length - 1;
console.log(contents);
