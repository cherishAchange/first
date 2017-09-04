/**
 * Created by taibowen on 2017/6/26.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

//mangodb
var MongoClient = require('mongodb').MongoClient;

var port = 6066;

function searchDataBase(dbName, table, data){
    var DB_CONN_STR = 'mongodb://localhost:27017/' + dbName;    
    var selectData = function(db, callback) {  
      //连接到表  
      var collection = db.collection(table);
      //查询数据
      //var whereStr = {"name":'菜鸟教程'};
      collection.find(data).toArray(function(err, result) {
        if(err)
        {
          console.log('Error:'+ err);
          return;
        }     
        callback(result);
      });
    }
     
    MongoClient.connect(DB_CONN_STR, function(err, db) {
      console.log("连接成功！");
      selectData(db, function(result) {
        console.log(result);
        db.close();
      });
    });
}

function writeDataBase(dbName, table, data){
    var DB_CONN_STR = 'mongodb://localhost:27017/'+ dbName; //数据库为 runoob
    var insertData = function(db, callback) {  
        //连接到表 site
        var collection = db.collection(table);
        //插入数据
        //var data = [{"name":"taibowen","password": "123456"},{"name":"liangrongfei","password":"123456"}];
        collection.insert(data, function(err, result) { 
            if(err){
                console.log('Error:'+ err);
                return;
            }     
            callback(result);
        });
     }
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        insertData(db, function(result) {
            console.log(result);
            db.close();
        });
    });
}

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
    }else if(request.url.slice(0,4) === '/api'){
        // 设置接收数据编码格式为 UTF-8  
        request.setEncoding('utf-8');  
        var postData = ""; //POST & GET ： name=zzl&email=zzl@sina.com  
        // 数据块接收中  
        request.addListener("data", function (postDataChunk) {  
            postData += postDataChunk;  
        });  
        // 数据接收完毕，执行回调函数  
        request.addListener("end", function () {  
            console.log('数据接收完毕');  
            console.log(postData);
            //var params = querystring.parse(postData);//GET & POST  ////解释表单数据部分{name="zzl",email="zzl@sina.com"}  
            var params = JSON.parse(postData);
            console.log(postData);  
            //console.log(params["name"]);  
            searchDataBase('lover', 'login', params);
            writeDataBase('lover', 'login', params); 
            response.writeHead(200, {  
                "Content-Type": "text/plain;charset=utf-8"  
            });
            response.write(JSON.stringify({"message": "ok"}));
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