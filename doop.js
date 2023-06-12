var module = require('./dbmod1');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
var mongojs = require('mongojs');

var databaseUrl = "mongodb://localhost:27017/mydb";
var db = mongojs(databaseUrl, ['users']);

http.createServer(function(request, response) {
    var data1 = '';

    console.log("Hello JS ");
    request.on('data', function(chunk) { 
        data1 += chunk; 
    });

    request.on('end', function() {
        var qs = querystring.parse(data1);
        var name = qs['username'];
        console.log(name);
        var email = qs['email'];
        console.log(email);
        
        if (request.url === '/login') {
            module.saveUser(name, email);
        }
    });
}).listen(4006);

console.log("Server started ");

exports.saveUser = function(username, email) {
    console.log('Saving user to mongo');
    db.users.insert({ "username": username, "email": email }, function(err, saved) {
        if (err || !saved) {
            console.log(err);
        } else {
            console.log("User saved");
        }
    });
}
console.log("Sample");
