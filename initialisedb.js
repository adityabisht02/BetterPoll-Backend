//mysql connector pool
const pool = require("./mysqlconnector");

function initialiseDB() {
  pool.query(
    "CREATE TABLE IF NOT EXISTS admin (id int AUTO_INCREMENT,username varchar(50),password varchar(255),email varchar(50));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created admin");
      }
    }
  );

  pool.query(
    "CREATE TABLE IF NOT EXISTS users (id int AUTO_INCREMENT,name varchar(50),email varchar(50),phone varchar(10),hashedPassword varchar(255),PRIMARY KEY (id));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created users");
      }
    }
  );
  pool.query(
    "CREATE TABLE IF NOT EXISTS menus (day varchar(25) primary key not null, breakfastMenu TEXT, lunchMenu TEXT, dinnerMenu TEXT);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created menu");
      }
    }
  );

  pool.query(
    "CREATE TABLE IF NOT EXISTS shuttles (busno int,tripName varchar(50));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created shuttles");
      }
    }
  );

  pool.query(
    "CREATE TABLE IF NOT EXISTS posts (id int AUTO_INCREMENT primary key, name varchar(128), content TEXT, date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created posts");
      }
    }
  );

  pool.query(
    "CREATE TABLE IF NOT EXISTS messcodes (userId int not null, breakfastcode int, lunchcode int, dinnercode int, snackscode int, FOREIGN KEY (userId) REFERENCES users(id));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created messcodes");
      }
    }
  );

  pool.query(
    "CREATE TABLE IF NOT EXISTS messattendance (userId int not null, userName varchar(50), breakfast varchar(1), lunch varchar(1), dinner varchar(1), snacks varchar(1), FOREIGN KEY (userId) REFERENCES users(id));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created messattendance");
      }
    }
  );

 
}

initialiseDB();
