// Express 기본 모듈
import express from 'Express';
import http from 'http';
import serveStatic from 'serve-static';
import path from 'path';
const __dirname = path.resolve();
import expressErrorHandler from 'express-error-handler';
import fs from 'fs';

// 인터파크 오픈예정 공연 스케줄러
import {openWaitPlay} from './schedule/scheduler.js';

// 오픈예정 공연 한달 전 데이터 삭제
import {openWaitPlayDelete} from './schedule/scheduler.js';

// mysql DB 쿼리
import {ticket_purchase, ticket_list} from './db/mysql.js';

// Express 객체 생성
const app = express();
const router = express.Router();

// 기본 포트를 app 객체에 설정
app.set('port', process.env.PORT || 5001);

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
    
    // 결과값 변수
    let result = '';

    // 오늘
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()+1) >= 10 ? (today.getMonth()+1) : ('0' + (today.getMonth()+1));
    const day = (today.getDate()) >= 10 ? today.getDate() : ('0' + today.getDate());

    // 저장 경로
    const dir = './openWait_dataFile/' + year + '-' + month + '/';

    // 경로 + 파일명
    let fileLoc = dir;
    let fileName =  '';
    
    //Directory 존재 여부 체크
    const directory = fs.existsSync(dir);

    // 파일 목록에서 최근 파일 확인
    if (directory) {
        fs.readdir(fileLoc, (err, files) => {
            if (err) {
                console.log('/api_v1/scraping1 fs.readdir Error : ' + err);
                console.log('Need to restart Server : ');
            } else {
                // 가장 최근 파일 이름
                fileName = files[files.length-1];

                // 파일 읽기
                fs.readFile( (fileLoc + fileName), 'utf-8', function(err, data){
                    if (err) {
                        console.log('/api_v1/scraping1 fs.readFile Error : ' + err);
                        result = "-1";
                    } else {
                        console.log('/api_v1/scraping1 fs.readFile Success');
                        result = data;
                    }
                    // 데이터 전달
                    res.header("Access-Control-Allow-Origin", "*");
                    res.send(result);
                });
            }    
        });

    } else {
        result = "-1";

        // 데이터 전달
        res.header("Access-Control-Allow-Origin", "*");
        res.send(result);
    }
    
});
    
    
    

