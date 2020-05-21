var http = require('http');
var {info, error} = require('./Modules/my-log');
var {countries} = require('countries-list');

var server = http.createServer(function(request, response){
    if(request.url==='/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>HELLO</p></body></html>');
        response.end();
    }else if(request.url==='/country'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.write(JSON.stringify(countries.EC));
        response.end();
    }else if(request.url==='/exit'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>BYE</p></body></html>');
        response.end();
    }else if(request.url==='/info'){
        var result = info(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else if(request.url==='/error'){
        var result = error(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else{
        response.writeHead(404,{'Content-type':'text/html'});
        response.write('<html><body><p>NOT FOUND</p></body></html>');
        response.end();
    };
});

server.listen(4000);
console.log('Running on 4000');























// var http = require('http');

// var server = http.createServer(function(request, response){ 
//     if(request.url==="/"){
//         response.writeHead(200, {'Content-Type':'text/html'});
//         response.write('<html><body><p>HELLO</p></body></html>');
//         response.end();
//     }else if(request.url==="/exit"){
//         response.writeHead(200, {'Content-Type':'text/html'});
//         response.write('<html><body><p>BYE</p></body></html>');
//         response.end();
//     }else{
//         response.writeHead(404, {'Conten-type':'text/html'});
//         response.write('<html><body><p>NOT FOUND</p></body></html>');
//         response.end();
//     }
// });
 
// server.listen(4000);
// console.log('running on 4000');