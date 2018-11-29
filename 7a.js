var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    let query = url.parse(request.url, true).query;
    let sum = /\b(sum)\b/;
    let sub = /\b(sub)\b/;
    let mul = /\b(mul)\b/;
    let div = /\b(div)\b/;
    if (query.first != undefined && query.second != undefined && Number(query.first) && Number(query.second)) {
        if (sum.test(request.url)) {
            txt = Number(query.first) + Number(query.second);
            response.write(txt.toString());
        } else if (sub.test(request.url)) {
            txt = Number(query.first) - Number(query.second);
            response.write(txt.toString());
        } else if (mul.test(request.url)) {
            txt = Number(query.first) * Number(query.second);
            response.write(txt.toString());
        } else if (div.test(request.url)) {
            txt = Number(query.first) / Number(query.second);
            response.write(txt.toString());
        } else {
            response.write("Undefined operation");
        }
    } else {
        response.write("Ivalid parameters");
    }
    response.end();

}).listen(8000);