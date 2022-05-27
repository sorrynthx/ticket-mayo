// Express 기본 모듈
var express = require('express'), http = require('http');

// Express 객체 생성
var app = express();

// 기본 포트를 app 객체에 설정
app.set('port', process.env.PORT || 5000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server listening... : ' + app.get('port'));
});

// 미들웨어1
app.use(function(req, res, next){
    console.log('미들웨어1 요청 처리');
    
    // 미들웨어1 데이터 처리
    req.user = 'Gon';

    next();
});

// 미들웨어2
app.use('/', function(req, res, next){
    console.log('미들웨어2 요청 처리');
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>200! ' + req.user + '</h1>');
});