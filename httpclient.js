var http = require('http');
var path = process.argv[2];

http.get(path, function (response) {
	response.on('data', function (chunk) {
		console.log(chunk.toString());
	});
});
