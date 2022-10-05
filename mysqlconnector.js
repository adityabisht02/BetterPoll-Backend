//mysql driver
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 20, //important
    host     : 'localhost',
    user     : 'root',
    password : process.env.SQL_PASSWORD,
    database : 'Betterpoll'
});



// pool.query("Sele",(err) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
    
// });

// pool.query("SELECT * FROM TABLE_NAME",(err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     // rows fetch
//     console.log(data);
// });