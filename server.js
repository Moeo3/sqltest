let http = require('http');
let mysql = require('mysql');
let url = require('url');
let fs = require('fs');
let path = require('path');
let querystring = require('querystring');

let sqlConnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '-----',
    database : 'test'
});

sqlConnect.connect();

let docPath = path.resolve('./');

let server = http.createServer((req, res) => {

    let file = docPath + req.url;
    console.log(file);
    if (req.url == '/') file += "index.html";

    fs.exists(file, (exist) => {
        if (exist) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            fs.readFile(file, "utf-8", (err, data) => {
                if (err) {
                    console.log(req.url + "loading is failed :" + err);
                } else {
                    res.end(data);
                }
            });
        } else {
            let {path, query} = url.parse(req.url);
            console.log(path, query);
            let ensgid = querystring.parse(query).ensgid;
            console.log(ensgid);

            let sqlQuery = 'SELECT * FROM -----';
            sqlConnect.query(sqlQuery, (err, rows) => {
                if (err) {
                    console.log('Select error' + err);
                }  
                res.end(JSON.stringify({'err': 0, 'rows': rows}));
            });
        };
    });
});

server.listen(8080);

// sqlConnect.end();