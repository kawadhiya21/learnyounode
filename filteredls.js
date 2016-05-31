var fs = require('fs');
var folderPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(folderPath, function (err, files) {
	var filtered = files.filter(function(file) {
		var dotSplit = file.split('.');
		return (ext == dotSplit[dotSplit.length - 1] && dotSplit.length > 1);
	});

	filtered.forEach(function(file) {
		console.log(file);
	});
});
