var http = require('http');
var through = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (doc) {
      return doc.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.end();
  }
});

server.listen(port);
