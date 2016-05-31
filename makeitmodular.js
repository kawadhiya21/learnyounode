var folderPath = process.argv[2];
var ext = process.argv[3];
var filter_module = require('./makeitmodular_module');

filter_module(folderPath, ext, function (err, files) {
  if (err) {
    return console.log(err);
  }

  files.forEach(function(file) {
    console.log(file);
  });
});
