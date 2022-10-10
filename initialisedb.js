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
  }
  
initialiseDB();