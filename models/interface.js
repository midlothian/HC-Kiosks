/*jslint node: true */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host            : 'regal.byu.edu',
    user            : 'webguest',
    password        : dbPass,
    database        : 'kiosk',
    port            : '8333'
});

// Create new comment in your database and return its id
exports.create = function(user, text, cb) {
  cb('12345')
}

// Get all comments
exports.all = function(cb) {
  cb(null, [])
}

// Get all comments by a particular user
exports.get = function(id, cb) {
    var title, subtitle, tag;

    connection.query('SELECT * FROM feature WHERE id = ' + id, function(err, rows, fields) {
        if (err) throw err;
        var title = rows[0].title; 
        var subtitle= rows[0].subtitle;
        var tag= rows[0].tag;
        
        cb(null, {title: title, subtitle: subtitle, tag: tag});
    });    
    
}