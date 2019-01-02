var fs = require('fs');
var path = require('path');


module.exports = function(fl, ext, callback) {
    fs.readdir(fl, function(err, files) {
        if (err) {
            return callback(err);
        }

        files = files.filter(function(file) {
            return path.extname(file) === "." + ext;
        });

        callback(null, files);
    });
}
