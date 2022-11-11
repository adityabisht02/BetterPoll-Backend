//mysql connector pool
const pool = require("./mysqlconnector");

function fillSampleData() {
  pool.query(
    "INSERT into menus (day,breakfastMenu,lunchMenu,dinnerMenu) values ('Sunday','omlete','Chowmien','Dosa'), ('Monday','breadjam','Rasam','Appalam'), ('Tuesday', 'breadjam', 'Fulka', 'Rice'), ('Wednesday', 'breadjam Milk', 'Rasam', 'Idli'), ('Thrusday', 'omlete', 'Rasam', 'Peas Masala'), ('Friday', 'breadjam', 'Chowmien', 'Appalam'), ('Saturday', 'breadjam', 'Rasam', 'Appalam');",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to menus");
      }
    }
  );

  pool.query(
    "INSERT into users (id,name,email,phone,hashedPassword) values (1,'Alex', 'alex@gmail.com', 1234567890,'xyz'), (2,'Bob','bob@gmail.com',1234567899,'xyy'), (3,'Luis','luis@gmail.com',1234567898,'xyxz'), (4,'Walter','walter@gmail.com',1234567896, 'xyty');",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to users");
      }
    }
  );

  pool.query(
    "INSERT into messcodes (userId,breakfastcode,lunchcode,dinnercode, snackscode) values (1,10001,10001,10001,10001), (2,12345,12345,12345,12345), (3,23456,23456,23456,23456), (4,25437,25437,25437,25437);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to messcodes");
      }
    }
  );

  pool.query(
    "INSERT into messattendance (userId,userName,breakfast,lunch,dinner,snacks) values (1,'Alex','A','A','A','A'), (2,'Bob','A','A','A','A'), (3,'Luis','A','A','A','A'), (4,'Walter','A','A','A','A');",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to messattendance");
      }
    }
  );

}

fillSampleData();