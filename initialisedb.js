//mysql connector pool
const pool = require("./mysqlconnector");

function initialiseDB() {
  pool.query(
    "CREATE TABLE admin (id int,name varchar(50),email varchar(50));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created admin");
      }
    }
  );

  pool.query(
    "CREATE TABLE users (id int AUTO_INCREMENT,name varchar(50),email varchar(50),phone varchar(10),PRIMARY KEY (id));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created users");
      }
    }
  );
  pool.query(
    "CREATE TABLE menus (day varchar(25) primary key not null, breakfastMenu TEXT, lunchMenu TEXT, dinnerMenu TEXT);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created menu");
      }
    }
  );

  pool.query(
    "CREATE TABLE shuttles (busno int,tripName varchar(50));",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created shuttles");
      }
    }
  );

  pool.query(
    "CREATE TABLE posts (id int AUTO_INCREMENT primary key, name varchar(128), content TEXT, date TIMESTAMP);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("created posts");
      }
    }
  );
  pool.query(
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Sunday','omlete','Chowmien','Dosa')",
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Monday','breadjam','Rasam','Appalam')",
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Tuesday','breadjam','Fulka','Rice')",
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Wednesday','breadjam Milk','Rasam','Idli')",
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Thrusday','omlete','Rasam','Peas Masala')",
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Friday','breadjam','Chowmien','Appalam')",
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Saturday','breadjam','Rasam','Appalam')",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to menus");
      }
    }
  );
}

initialiseDB();
