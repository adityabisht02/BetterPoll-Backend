//mysql driver
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10, //important
    host     : 'localhost',
    user     : 'root',
    password : process.env.SQL_PASSWORD,
    database : 'betterpoll'
});



module.exports=pool;