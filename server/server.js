const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mysql');
const mysqlConfig = require('./config/mysql-config.js');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

const mysql = sql.createConnection(mysqlConfig);
mysql.connect( function(err) {
    if (err) return console.log(err);
})

app.get('/api/spanish/top1000', (req, res) => {    
    mysql.query('select * from top1000', (err, result) => {
        if (err) return console.log(err);
        res.json(result);
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
