const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	uri: 'localhost',
	database: 'security',
	user: 'root',
	password: 'root',
	multipleStatements: true
});

module.exports = pool;
