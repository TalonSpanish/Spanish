const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mysql');
const mysqlConfig = require('./config/mysql-config.js');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const mysql = sql.createConnection(mysqlConfig);

mysql.connect((err) => {
  if (err) {
    return res.json({ err });
  }
});

app.get('/api/spanish/top1000', (req, res) => {    
  mysql.query('select * from top1000', (err, result) => {
    if (err) return res.json({ err });
    return res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
