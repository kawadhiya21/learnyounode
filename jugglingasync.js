var http = require('http');
var urls = [];

for(var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

var async_count = 0;

function async() {
  if (async_count >= urls.length) {
    return;
  }
  http.get(urls[async_count], function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk.toString();
    });

    response.on('end', function () {
      console.log(data);
      async_count += 1;
      async();
    });
  });
}

async();
