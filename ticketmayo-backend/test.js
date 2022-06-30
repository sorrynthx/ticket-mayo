import fs from 'fs';

const today = new Date();
const dir = './openWait_dataFile/' + (today.getFullYear() + '-' + (today.getMonth()+1)) + '/';

const makeFolder = (dir) => {
    
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);   
    }
}

const showFiles = (dir) => {

    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        console.log(files);
    });
}

showFiles(dir);


