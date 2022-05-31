import cron from 'node-cron';
import fs from 'fs';
import {scraping1} from '../API/scraping1.js';

// 실행주기 (분,시,일,월,요일) * 10,18 * * * 
export const schedule1 = cron.schedule('10 * * * *', function () {
    const today = new Date();
    let today_string = (today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate());
    let fileLoc = './dataFile/';
    let fileName = today_string + '.txt';
    
    console.log(fileLoc+fileName);

    (async () => {
        let result = await scraping1();
        
        fs.writeFile( fileLoc+fileName, result, function(err){
            if (err) {
                console.log('Error : ' + err);
            }
            console.log('파일 쓰기 완료');
        });
        
    })();
    
}, {
    scheduled: false
});

//schedule1.start();