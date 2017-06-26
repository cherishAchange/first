/**
 * Created by taibowen on 2017/6/26.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var port = 6066;

http.createServer(function (request, response) {
    var dirname = __dirname;
    var bootdir = dirname.slice(0,dirname.length-3);
    if(request.url === '/'){
        fs.readFile(bootdir+'/first/hun.html',function(err,data){
            if(err){
                response.writeHead(404,{"ContentType":"text/html"});
            }else{
                response.writeHead(200,{"ContentType":"text/html"});
                response.write(data);
            }
            response.end();
        });
    }
}).listen(port);

console.log('server is running in port 6066');