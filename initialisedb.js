//mysql connector pool
const pool=require("./mysqlconnector");

function initialiseDB(){
    pool.query("CREATE TABLE admin (id int,username varchar(50),password varchar(50),email varchar(50));", (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created admin")
      }
    });
  
    pool.query("CREATE TABLE users (id int AUTO_INCREMENT,name varchar(50),email varchar(50),phone varchar(10),PRIMARY KEY (id));", (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created users")
      }
    });
    pool.query("CREATE TABLE menus (day varchar(25) primary key not null, breakfastMenu TEXT, lunchMenu TEXT, dinnerMenu TEXT);", (ex, rows)=>{
        if(ex){
            console.log(ex);
        } else{
            console.log("created menu");
        }
    });

    pool.query("CREATE TABLE shuttles (busno int,tripName varchar(50));", (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created shuttles")
      }
    });
  }
  
initialiseDB();
