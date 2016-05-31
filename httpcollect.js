var http = require('http');
var path = process.argv[2];

http.get(path, function (response) {
  var data = '';
  response.on('data', function (chunk) {
    data += chunk.toString();
  });

  response.on('end', function () {
    console.log(data.length);
    console.log(data);
  });
});
