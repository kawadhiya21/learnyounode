var fs = require('fs');
var filePath = process.argv[2];

var contents = fs.readFile(filePath, function (err, buf) {
  console.log(buf.toString().split('\n').length - 1);
});
