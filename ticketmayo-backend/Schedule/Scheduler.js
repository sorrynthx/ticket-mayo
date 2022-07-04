import cron from 'node-cron';
import fs from 'fs';
import {scraping1} from '../API/scraping1.js';

const makeFolder = (dir) => {
    
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);   
    }
}

// 실행주기 (분,시,일,월,요일) * 10,18 * * * export
export const openWaitPlay = cron.schedule('22 * * * *', function() {
    
    // 오늘
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()+1) >= 10 ? (today.getMonth()+1) : ('0' + (today.getMonth()+1));
    const day = (today.getDate()) >= 10 ? today.getDate() : ('0' + today.getDate());

    // 저장 경로
    const dir = './openWait_dataFile/' + year + '-' + month + '/';

    // 폴더 생성(yyyy-mm)
    makeFolder(dir);

    // 경로 + 파일명
    let today_string = year + '-' + month + '-' + day;
    let fileLoc = dir;
    let fileName =  'interpark-play-' + today_string + '.txt';
    
    (async () => {
        // 스크래핑 시작
        let result = await scraping1();
        
        // 텍스트(JSON) 파일 생성
        fs.writeFile( fileLoc+fileName, result, function(err){
            if (err) {
                console.log('openWaitPlay Error : ' + err);
            }
            console.log('파일 쓰기 완료');
        });
        
    })();
    
});

// 실행주기 매월 1일
export const openWaitPlayDelete = cron.schedule('* * 1 * *', function() {
    
    // 한달 전
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()) >= 10 ? (today.getMonth()) : ('0' + (today.getMonth()));
    const day = (today.getDate()) >= 10 ? today.getDate() : ('0' + today.getDate());
    
    // 저장 경로
    const dir = './openWait_dataFile/' + year + '-' + month + '/';

    fs.rm(dir, { recursive: true }, function(err) {
        if (err) {
            console.log("openWaitPlayDelete Error : ", err);
        } else {
            console.log("openWaitPlayDelete 2달 전 데이터 Delete success");
        }
    })
});

//a.start();