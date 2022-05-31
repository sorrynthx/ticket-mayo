import puppeteer from 'puppeteer';

// 인터파크 스크래핑1 (오픈예정 공연) 
export async function scraping1() {
    
    try {
        // page initializing (false: show / true: hide)
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
            
        // url
        await page.goto('http://ticket.interpark.com/webzine/paper/TPNoticeList_iFrame.asp?bbsno=0&pageno=1&stext=&KindOfGoods=&Genre=1&sort=opendate');
        
        // data
        let data = []; 
        const number = await page.$$eval("body > div > div > div.list > div.table > table > tbody > tr", (data) => data.length);
        
        for (let index = 0; index < number; index++) {
            // 각 줄의 정보를 얻어서 배열에 Push
            data.push(await getOne(page, index + 1));    
            await page.waitForTimeout(2000);
        }

        // close
        page.close();
        browser.close();

        //console.log(JSON.stringify(data));
        return Promise.resolve(JSON.stringify(data));

    } catch (error) {
        console.log('error : ' + error);
    }

}

async function getOne(page, index) {

    let data = {};

    // type (타입)
    data.type = await page.$eval("body > div > div > div.list > div.table > table > tbody > tr:nth-child(" + index + ") > td.type", (data) => data.textContent);

    // subject (제목)
    let subjectTag = await page.$("body > div > div > div.list > div.table > table > tbody > tr:nth-child(" + index + ") > td.subject > a");
    // subject a tag content
    data.subject = await page.evaluate((data) => { return data.textContent; }, subjectTag);
    data.link = await page.evaluate((data) => { return data.href; }, subjectTag);

    // date (오픈예정일)
    data.date = await page.$eval("body > div > div > div.list > div.table > table > tbody > tr:nth-child(" + index + ") > td.date", (data) => data.textContent);
    
    // count (조회수)
    data.count = await page.$eval("body > div > div > div.list > div.table > table > tbody > tr:nth-child(" + index + ") > td.count", (data) => data.textContent);

    // GO DETAIL
    await page.goto(data.link);

    // play image
    let imageTag = await page.$("#wrapBody > div > div > div.board > div.detail_top > div.info > span > img");
    if (imageTag == null) imageTag = 'no-data';
    else data.image = await page.evaluate((data) => { return data.src; }, imageTag);
    
    // casting array
    let casting = [];
    
    // casting member
    let castingTagNumber = await page.$$eval("#wrapBody > div > div > div.board > div.casting > ul > li", (data) => data.length);
    
    if (castingTagNumber != 0) {
        for (var i=1; i<=castingTagNumber; i++) {
            let castingTag = await page.$("#wrapBody > div > div > div.board > div.casting > ul > li:nth-child(" + i + ") > a");
            let castingImgTag = await page.$("#wrapBody > div > div > div.board > div.casting > ul > li:nth-child(" + i + ") > a > img");
            
            // casting info (image, name)
            let castingInfo = {};
            castingInfo.castingImage = await page.evaluate((data) => { return data.src; }, castingImgTag);
            castingInfo.castingName = await page.evaluate((data) => { return data.textContent; }, castingTag);
            casting.push(castingInfo);
        }
    } 

    data.casting = casting;
    
    // GO BACK
    await page.goBack();

    return Promise.resolve(data);
}