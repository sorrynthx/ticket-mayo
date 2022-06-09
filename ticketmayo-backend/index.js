// Express 기본 모듈
import express from 'Express';
import http from 'http';
import serveStatic from 'serve-static';
import path from 'path';
const __dirname = path.resolve();
import expressErrorHandler from 'express-error-handler';
import fs from 'fs';

// 인터파크 오픈예정 공연 스케줄러
import {openWaitPlay} from './Schedule/scheduler.js';

// mysql DB 쿼리
import {ticket_purchase, ticket_list} from './db/mysql.js';

// Express 객체 생성
const app = express();
const router = express.Router();

// 기본 포트를 app 객체에 설정
app.set('port', process.env.PORT || 5000);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server listening... : ' + app.get('port'));
});

// serve-static 미들웨어
app.use('/public', serveStatic(path.join(__dirname, 'public')));

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

// router 등록
app.use('/', router);

// 오류 핸들러
const errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html',
        '400': './public/400.html',
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

/* ============================== api ============================== */
/*  400 요청변수 확인
    401 인증실패
    404 API 없음
    405 메소드 허용 X
    500 서버 오류
*/
router.get("/", (req, res) => {    
    res.sendStatus(200);
});

// test
router.post("/api_v0/:name", (req, res) => {
    const data1 = req.body;
    const data2 = req.params.name;
    console.log(data1, data2);
    
    if (Object.keys(data1).length !== 0) res.sendStatus(200);
    else res.sendStatus(400);
});

// 양도티켓 리스트
router.get("/api_v1/ticket/list", (req, res) => {
    ticket_list(res);    
});

// 양도티켓 구매 쿼리
router.post("/api_v1/ticket/purchase", (req, res) => {
    // request 값
    const userInfo = req.body;
    // 쿼리 실행
    ticket_purchase(userInfo, res);
});

// 인터파크 오픈예정 공연
router.get("/api_v1/scraping1", (req, res) => {
    
    const today = new Date();
    let today_string = (today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate());
    let fileLoc = './dataFile/';
    let fileName = today_string + '.txt';

    fs.readFile( fileLoc+fileName, 'utf-8', function(err, data){
        if (err) {
            console.log('Error : ' + err);
        }
        console.log('파일 읽기 완료');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(data);
    })
});
    
    
    

