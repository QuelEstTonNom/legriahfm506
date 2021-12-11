var express = require('express');
var app=express();
var http=require("http").Server(app);

var opn = require('opn');
var port=9856;
var uri = 'http://87.89.188.208:' + port;

app.use('/', express.static(__dirname));
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
});

http.listen(port,function(){
    opn(uri);
    console.log("listening on port : "+port);
});