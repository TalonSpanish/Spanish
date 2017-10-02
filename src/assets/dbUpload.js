const express = require('express');
const app = express();
const sql = require('mysql');
const list = require('./top1000.js');

var mysql = sql.createConnection({
	host: "mysql.cxhjbq9e8ttl.us-west-1.rds.amazonaws.com",
	user: 'admin',
	password: 'password',
	database: 'db1',
})

let sqlString = (word) => {
	return `insert into top1000 (english, spanish, frequency) values ('${word.english}', '${word.spanish}', '${word.rank}');`
}

mysql.connect( function(err) {
	if (err) return console.log(err);
	list.forEach(word => {
		mysql.query(sqlString(word), (err, result) => {
			if (err) return console.log(err);
		})
	})
	
})
