import mysql from 'mysql';

function mysql_init() {
    return mysql.createConnection({ 
        host : "localhost",
        user : "root",
        password : "root!@#", 
        database : "test" 
    });
}

function mysql_connect(connection) {
    connection.connect();
}
function mysql_end(connection) {
    connection.end();
}

export function ticket_purchase(userInfo, res) {

    // body 값
    console.log(userInfo.name + ' / ' + userInfo.phone);

    // db 설정
    const connection = mysql_init();

    // 결과
    let result = false;

    // 쿼리
    let sql = "SELECT * FROM TEST_TBL"; 

    // db 연결
    mysql_connect(connection);
    
    // 쿼리 실행
    connection.query(sql, function(err, rows, fields){
        
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } 
        else {
            console.log(rows);
            result = true;
            res.sendStatus(200);
        } 
        // db 종료
        mysql_end(connection);
    });
};


export function ticket_list(res) {
    
    const connection = mysql_init();
    
    let result ={};

    let sql = "SELECT * FROM TICKET_TBL ";
    sql += "where ";
    sql += "date_format(startDate, '%Y-%m-%d') <= date_format(now(), '%Y-%m-%d') and ";
    sql += "date_format(endDate, '%Y-%m-%d') >= date_format(now(), '%Y-%m-%d') ";
    sql += "order by endDate asc;";

    mysql_connect(connection);

    connection.query(sql, function(err, rows, fields){
        
        if(err) {
            console.log(err);
        } 
        else {
            //console.log(rows);
            result.list = rows;
        } 
        mysql_end(connection);

        res.send(JSON.stringify(result));
    });
};



// mysql 8.0 이상 -> 패스워드 plush 변경 예시
//SELECT Host,User,plugin,authentication_string FROM mysql.user;
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root!@#';