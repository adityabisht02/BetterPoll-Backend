//mysql connector pool
const pool=require("./mysqlconnector");

function initialiseDB(){
    pool.query("CREATE TABLE admin (id int,name varchar(50),email varchar(50));", (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created admin")
      }
    });
  
    pool.query("CREATE TABLE users (id int,name varchar(50),email varchar(50),phone int(50));", (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created admin")
      }
    });
    pool.query("CREATE TABLE menus (day varchar(25) primary key not null, breakfastMenu TEXT, lunchMenu TEXT, dinnerMenu TEXT);", (ex, rows)=>{
        if(ex){
            console.log(ex);
        } else{
            console.log("created menu!");
        }
    });

    pool.query("CREATE TABLE shuttles (busno int,tripName varchar(50));", (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created admin")
      }
    });
  }
  
initialiseDB();
