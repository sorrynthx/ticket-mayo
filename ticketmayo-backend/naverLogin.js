
// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));


// 익스프레스 객체 생성
var app = express();

//클라이언트에서 Ajax로 요청했을 때, CORS(다중서버접속) 지원
var cors = require('cors');

//클라이언트에서 ajax로 요청했을 때 CORS(다중서버접속)지원
app.use(cors());

// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();
app.use('/', router);

// 기본 속성 설정
app.set('port', process.env.PORT || 5000);









app.get('/member', function (req, res) {
    
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('응답 페이지');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>테스트 응답 페이지</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();

    const client_id = 'aQ1pxTghNuNMaX5MboRU';
    const client_secret = 'DXAPsRh69K';
    const state = "d143348d-8a1a-40b4-ad21-b58e2e0c3a8b";
    const redirectURI = encodeURI("http://localhost:3000/loginNaver/callback");
    const token = "AAAAOcqtudVeMFYmJEhigYJSGhXnX9FvvcUXeLB6xzhGle3crH9ihu-y__8VIWYaobwocnNxaK9DwLDyAsjNd-96LrI";
    const header = "Bearer " + token;
    
    fetch('https://openapi.naver.com/v1/nid/me', {
        method: 'get',
        headers: {'Authorization': header}
    })
    .then(res => res.text())
    .then(text => console.log(text));

  });


// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});