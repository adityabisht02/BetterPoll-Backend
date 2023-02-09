//mysql connector pool
const pool = require("./mysqlconnector");

function fillTables() {
  pool.query(
    "INSERT into menus (day,breakfastMenu,lunchMenu,snacksMenu,dinnerMenu) values ('Sunday','omlete','Chowmien','samose','Dosa'), ('Monday','breadjam','Rasam','maggi','Appalam'), ('Tuesday', 'breadjam', 'Fulka','pakora','Rice'), ('Wednesday', 'breadjam Milk', 'Rasam','break','Idli'), ('Thursday', 'omlete', 'Rasam','pasta', 'Peas Masala'), ('Friday', 'breadjam', 'Chowmien','penne pasta', 'Appalam'), ('Saturday', 'breadjam', 'Rasam','fruits','Appalam');",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to menus");
      }
    }
  );

  pool.query(
    "INSERT into gatepasses (id,datein,dateout,parentphone,roomno,reason,approvalstatus) values (2,'8/2/23','6/2/23','123456789','A-563','acidity',0),(1,'9/2/23','5/2/23','123456789','T2-763','weekend',0);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to gatepasses");
      }
    }
  );

  pool.query(
    "INSERT into users (id,name,email,phone) values (1,'adityabisht', 'adi@gmail.com', 123456789), (2,'Bob','bob@gmail.com',1234567899), (3,'Luis','luis@gmail.com',1234567898), (4,'Walter','walter@gmail.com',1234567896);",
    (ex, rows) => {
      if (ex) {
        console.log(ex);
      } else {
        console.log("Data added to users");
      }
    }
  );
}

function fillForeignKeyTables() {
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

fillTables();

//foreign key tables will be filled after the tables they are pointing to are filled
fillForeignKeyTables();
