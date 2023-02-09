const express = require("express");
var router = express.Router();
//mysql connector pool
const pool = require("../mysqlconnector");

//view-mess-details   (will include only menu because messcode is basically id of the user which is already stored locally)

router.get("/view-mess-details", function (req, res) {
  //we have to send everyone the same menu depending on the date
  const x = new Date();
  //function to find current day
  const day = findCurrentDay(x.getDay());
var breakFastMenu,lunchMenu,dinnerMenu,snacksMenu;
  pool.query(
    "SELECT * FROM menus WHERE day = ?",day,function (error, results, fields) {
        //if no menu configured for that day
      if (results.length == 0) {
        breakFastMenu = "Menu not configured";
        lunchMenu="Menu not configured";
        dinnerMenu="Menu not configured";
        snacksMenu="Menu not configured";
        //success true as we have to return not configured
        return res.json({success: true, breakFastMenu,lunchMenu,dinnerMenu,snacksMenu});
      } else {
        breakFastMenu=results[0].breakfastMenu;
        lunchMenu=results[0].lunchMenu;
        dinnerMenu=results[0].dinnerMenu;
        snacksMenu=results[0].snacksMenu;

        return res.json({success:true,breakFastMenu,lunchMenu,dinnerMenu,snacksMenu,msg:"Menus retrieved successfully"});
      }
    }
  );
});

//will return day based on the number x (0-6)
function findCurrentDay(x) {
  var day;
  switch (x) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  return day;
}

module.exports = router;
