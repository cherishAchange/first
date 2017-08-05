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
    var bootdir = dirname.slice(0,dirname.length-4);
    if(request.url === '/' || request.url.slice(0,4) === '/you'){
        console.log(bootdir);
        fs.readFile(bootdir+'/src/index.html',function(err,data){
            if(err){
                response.writeHead(404,{"Content-Type":"text/html"});
            }else{
                response.writeHead(200,{"Content-Type":"text/html"});
                response.write(data.toString());
            }
            response.end();
        });
    }else if(request.url === "/dist/js/bundle.js") {
        fs.readFile(bootdir + request.url, function (err, data) {
            if (err) {
                response.writeHead(404, {"Content-Type": "text/javascript"});
            } else {
                response.writeHead(200, {"Content-Type": "text/javascript"});
                response.write(data.toString());
            }
            response.end();
        });
    }else if(request.url.split('/')[1] === "export"){    //下载请求的处理
        fs.readFile(bootdir + request.url.split('?')[0] + '/1','utf-8', function (err, data){
            console.log(bootdir + request.url.split('?')[0] + '/1');
            if(err){
                response.writeHead(404, {"Content-Type": "text/html"});
            }else{
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write('<head><meta charset="utf-8"/></head>');
                response.write('<h1>' + data.toString() + '</h1>');
            }
            response.end();
        });
    }else{
        fs.readFile(bootdir + '/hun.html', function (err, data){
            if(err){
                response.writeHead(404, {"Content-Type": "text/html"});
            }else{
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(data);
            }
            response.end();
        });
    }
}).listen(port);

console.log('server is running in port 6066');