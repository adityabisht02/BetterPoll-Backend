//mysql driver
const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit : 10, //important
    host     : 'localhost',
    user     : 'root',
    password : process.env.SQL_PASSWORD,
    database : 'betterpoll'
});



module.exports=pool;