//mysql driver
const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit : 10, //important
    host     : 'localhost',
    user     : 'root',
    password : 'leksyking7',
    database : 'betterpoll'
});



module.exports=pool;
