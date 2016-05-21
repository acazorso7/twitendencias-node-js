var app = require('express')();
var bodyParser = require("body-parser");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var express = require('express');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/postSample', function(req, res){
  res.sendfile('postSample.html');
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.post('/spark-sample',function(req,res){
  var user_name=req.body.tweet;
  console.log("New message: "+user_name);
  io.emit('message', user_name);
  res.send('POST request to homepage');
});

app.post('/sentiment-analysis',function(req,res){
  console.log("Positive: "+req.body.positiveScore+" Negative: "+req.body.negativeScore);
  io.emit('chart-sentiment', req.body);
  res.send('POST request to homepage');
});

app.post('/spark-charts',function(req,res){
  var user_name=req.body.vocals;
  console.log("Total vocals: "+user_name);
  io.emit('chart', user_name);
  res.send('POST request to charts');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
