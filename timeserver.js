var net = require('net');
var port = process.argv[2];
var server = net.createServer(function(socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2)
  var dateNum = ('0' + date.getDate()).slice(-2)
  var hour = date.getHours();
  var minute = date.getMinutes();
  socket.end(year + '-' + month + '-' + dateNum + ' ' + hour + ':' + minute + '\n');
});
server.listen(port);
