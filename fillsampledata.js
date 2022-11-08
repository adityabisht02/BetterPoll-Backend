//mysql connector pool
const pool = require("./mysqlconnector");

function fillSampleData(){
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

    
}

fillSampleData();