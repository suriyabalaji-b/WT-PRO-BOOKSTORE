var module = require('./dbfetch');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
http.createServer(function(request, response) {
        var data1 = '';
        console.log("Hello JS ");
        request.on('data', function(chunk) { data1 += chunk; });
        request.on('end', function() {
        var qs = querystring.parse(data1);
        var sname = qs['name'];
        console.log(sname);
        if (request.url === '/fetch') {
            module.fetchUser(sname);
            }
        
    });
}).listen(3000);
console.log("Server started ");
