var fs = require('fs');

module.exports = function(folderPath, ext, callback) {
  fs.readdir(folderPath, function (err, files) {
    if (err) {
      return callback(err);
    }

    var filtered = files.filter(function(file) {
      var dotSplit = file.split('.');
      return (ext == dotSplit[dotSplit.length - 1] && dotSplit.length > 1);
    });

    callback(null, filtered);
  });
};
