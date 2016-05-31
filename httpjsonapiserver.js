var http = require('http');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });        
        
    if (req.url.indexOf('/api/parsetime') > -1) {
      var parts = req.url.split('?');
      var date = parseDate(parts);
      var response = {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
      }

      res.end(JSON.stringify(response));
    }
        
    else if (req.url.indexOf('/api/unixtime') > -1) {
      var parts = req.url.split('?');
      var date = parseDate(parts);

      var response = {
        unixtime : date.getTime()
      };

      res.end(JSON.stringify(response));
    }
    
    else {
      res.end();
    }
  } else {
    res.end();
  }
});

server.listen(port);

function parseDate(parts) {
  if (parts.length > 1) {
    var params = parts[1].split('=');
    
    if (params[0] === 'iso') {
      return new Date(params[1]);
    }
    else {
      return false;
    }
  } else {
    return false;
  }
}
